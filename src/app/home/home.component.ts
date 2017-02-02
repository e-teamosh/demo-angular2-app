import {Component, OnInit} from "@angular/core";
import * as _ from "lodash";
import {CityService} from "../common/services/city.service";
import {City} from "../common/models/city.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subject, Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'wf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: string[];
  cities: Observable<City[]>;
  cityForm: FormGroup;

  private searchCityStream = new Subject<string>();

  constructor(private cityService: CityService,
              private formBuilder: FormBuilder) {

    this.cityService.getAllCityListFromJson()
      .then(result => this.cityService.getCountriesFromCityList())
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
    console.log('Submit form');
    let cityId = this.cityForm.get('cityId').value;
    if (!_.isNull(cityId)) {
      console.log('City ID is: ' + cityId);
    }
    this.clearSelectedCity();
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
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((value: string) => {
        if (_.isEmpty(value)) {
          this.clearSelectedCity();
          return Promise.resolve([]);
        }
        return this.cityService.getCityListByQuery(value, this.cityForm.get('country').value)
      });
  }

  private clearSelectedCity(): void {
    this.cityForm.get('cityId').setValue(null);
  }
}
