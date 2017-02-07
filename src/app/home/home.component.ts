import {Component, OnInit} from "@angular/core";
import * as _ from "lodash";
import {WfCityService} from "../common/services/city.service";
import {WfCity} from "../common/models/city.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subject, Observable} from "rxjs";
import {SPINNER} from "../common/services/spinner.service";

@Component({
  moduleId: module.id,
  selector: 'wf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class WfHomeComponent implements OnInit {
  countries: string[];
  cities: Observable<WfCity[]>;
  cityForm: FormGroup;
  spinnerIndex: number = SPINNER.GLOBAL;

  private searchCityStream = new Subject<string>();

  constructor(private wfCityService: WfCityService,
              private formBuilder: FormBuilder) {

    this.wfCityService.getAllCityListFromJson()
      .then(result => this.wfCityService.getCountriesFromCityList())
      .then(result => this.countries = result);

  }

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      cityId: [null]
    });

    this.registerSubscriberForCityValue();
  }

  getWeatherForecast(event: Event): void {
    event.preventDefault();
    this.clearSelectedCity();
    console.log('Submit form');
    let cityId = this.cityForm.get('cityId').value;
    if (!_.isNull(cityId)) {
      console.log('WfCity ID is: ' + cityId);
    }
    this.cityForm.reset();

    // this.http.get('weather?q=London')
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));

  }

  get isCountrySelected(): boolean {
    return !_.isEmpty(this.cityForm.get('country').value);
  }

  private registerSubscriberForCityValue(): void {
    this.cityForm.get('city').valueChanges.subscribe(value => {
      this.searchCityStream.next(value);
    });

    this.cities = this.searchCityStream
      .debounceTime(750)
      .distinctUntilChanged()
      .switchMap((value: string) => {
        if (_.isEmpty(value) || value.length < 3) {
          this.clearSelectedCity();
          return Promise.resolve([]);
        }
        return this.wfCityService.getCityListByQuery(value, this.cityForm.get('country').value);
      });
  }

  private clearSelectedCity(): void {
    this.cityForm.get('cityId').setValue(null);
  }
}
