import {Component, OnInit} from "@angular/core";
import * as _ from "lodash";
import {WfCityService} from "../common/services/city.service";
import {WfCity} from "../common/models/city.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subject, Observable} from "rxjs";
import {SPINNER, WfSpinnerService} from "../common/services/spinner.service";
import {WfCoord} from "../common/models/coord.model";

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
  spinnerIndex: number = SPINNER.GLOBAL;
  isSearchBusy: boolean;

  private searchCityStream = new Subject<string>();

  constructor(private wfCityService: WfCityService,
              private formBuilder: FormBuilder,
              private wfSpinnerService: WfSpinnerService) {

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
    this.clearSelectedCity();
    console.log('Submit form');
    let cityId = this.cityForm.get('cityId').value;

    this.cityForm.reset();

    // this.http.get('weather?q=London')
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));

  }

  get isCountrySelected(): boolean {
    return !_.isEmpty(this.cityForm.get('country').value);
  }

  get isCityNotFound(): boolean {
    return !this.isSearchBusy && this.sizeCities === 0 && this.cityForm.get('cityQuery').value.length > 3;
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

        return this.wfCityService.getCityListByQuery(_.startCase(value), this.cityForm.get('country').value)
          .then(result => {
            this.sizeCities = _.size(result);
            return result;
          });
      });
  }

  private clearSelectedCity(): void {
    this.cityForm.get('cityId').setValue(null);
    this.sizeCities = null;
  }

  private registerSubscriberForCityIdValue(): void {
    this.cityForm.get('cityId').valueChanges.subscribe(value => {
      console.log('City ID is: ' + value);
      this.wfCityService.getCityById(value)
        .then(result => this.getGoogleMapForCity(result));
    });
  }

  private getGoogleMapForCity(city: WfCity): void {
    if (!_.isEmpty(city)) {
      console.dir(city.getCoord())
    }
  }
}
