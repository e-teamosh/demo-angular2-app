import {Component, OnInit} from "@angular/core";
import * as _ from "lodash";
import {WfCityService} from "./services/city.service";
import {WfCity} from "../common/models/weather/city.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subject, Observable} from "rxjs";
import {SPINNER, WfSpinnerService} from "../common/spinner-controls/services/spinner.service";
import {WfGoogleMapsService} from "./services/google-maps.service";
import {WfWeatherService} from "./services/weather.service";
import {WfNotificationService} from "../core/services/notification.service";
import {WfWeather} from "../common/models/weather/weather.model";
import {WfHomeRoutingModule} from "./home-routing.module";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'wf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class WfHomeComponent implements OnInit {
  countries: string[];
  cities: Observable<WfCity[]>;
  sizeCities: number;
  cityForm: FormGroup;
  // spinnerIndex: number = SPINNER.GLOBAL;
  isSearchBusy: boolean;
  cityStaticMapUrl: string;

  private searchCityStream = new Subject<string>();

  constructor(private wfCityService: WfCityService,
              private formBuilder: FormBuilder,
              private wfSpinnerService: WfSpinnerService,
              private wfGoogleMapsService: WfGoogleMapsService,
              private router: Router) {

    this.wfCityService.getAllCityListFromJson()
      .then(result => this.wfCityService.getCountriesFromCityList())
      .then(result => this.countries = result);

  }

  ngOnInit(): void {
    this.wfSpinnerService.spinner[SPINNER.SEARCH].subscribe(value => this.isSearchBusy = value);

    this.cityForm = this.formBuilder.group({
      country: ['', Validators.required],
      cityQuery: [''],
      cityId: [null, Validators.required]
    });

    this.registerSubscriberForCityValue();
    this.registerSubscriberForCityIdValue();
  }

  getWeatherForecast(event: Event): void {
    event.preventDefault();
    let cityId = this.cityForm.get('cityId').value;
    this.router.navigate(['/home/weather', cityId]);
  }

  get isCountrySelected(): boolean {
    return !_.isEmpty(this.cityForm.get('country').value);
  }

  get isCityNotFound(): boolean {
    return !this.isSearchBusy && this.sizeCities === 0 && this.cityForm.get('cityQuery').value.length >= 3;
  }

  private registerSubscriberForCityValue(): void {
    this.cityForm.get('cityQuery').valueChanges.subscribe(value => {
      this.searchCityStream.next(value);
    });

    this.cities = this.searchCityStream
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((value: string) => {
        if (_.isEmpty(value) || value.length < 3) {
          this.clearSelectedCity();
          return Promise.resolve([]);
        }
        this.wfSpinnerService.showSpinner(SPINNER.SEARCH);
        return this.wfCityService.getCityListByQuery(_.startCase(value), this.cityForm.get('country').value)
          .then(result => {
            this.sizeCities = _.size(result);
            this.wfSpinnerService.hideSpinner(SPINNER.SEARCH);
            return result;
          });
      });
  }

  private clearSelectedCity(): void {
    this.cityForm.get('cityId').setValue(null);
    this.sizeCities = null;
    this.cityStaticMapUrl = '';
  }

  private registerSubscriberForCityIdValue(): void {
    this.cityForm.get('cityId').valueChanges.subscribe(value => {
      this.wfCityService.getCityById(value)
        .then(result => this.getGoogleMapForCity(result));
    });
  }

  private getGoogleMapForCity(city: WfCity): void {
    if (!_.isEmpty(city)) {
      this.cityStaticMapUrl = this.wfGoogleMapsService.getStaticMapUrl(city.getCoord());
    }
  }
}
