import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {WfCity} from "../models/city.model";
import {Http} from "@angular/http";
import {WfSpinnerService, SPINNER} from "./spinner.service";

@Injectable()
export class WfCityService {
  private allCityList: WfCity[];

  constructor(private http: Http,
              private wfSpinnerService: WfSpinnerService) {
    this.allCityList = [];
  }

  getAllCityListFromJson(): Promise<WfCity[]>{
    return this.http.get('./assets/city-list/city.list.us.json')
      .toPromise()
      .then(res => {
        let cities = res.json();
        return this.defineCityList(cities);
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  getCountriesFromCityList(): Promise<string[]> {
    return new Promise(resolve => resolve(_.uniq(_.map(this.allCityList, 'country'))));
  }

  getCityListByCountry(country: string): WfCity[] {
    return _.filter(this.allCityList, (cityItem) => cityItem.getCountry() === country);
  }

  getCityListByQuery(query: string, country: string): Promise<WfCity[]> {
    this.wfSpinnerService.showSpinner(SPINNER.SEARCH);
    return new Promise(resolve => {
      // TODO: remove this
      setTimeout(() => {
        let cityListByCountry = this.getCityListByCountry(country);
        let foundCityList = _.filter(cityListByCountry, (cityItem) => {
          return _.includes(cityItem.getName(), query);
        });
        this.wfSpinnerService.hideSpinner(SPINNER.SEARCH);
        return resolve(foundCityList);
      }, 1000);
    });
  }

  getCityById(cityId: number): Promise<WfCity> {
    return new Promise(resolve => resolve(_.find(this.allCityList, (city) => city.getId() === cityId)));
  }

  private defineCityList(cities: Object): WfCity[] {
    _.forEach(cities, (cityItem => {
      let city = new WfCity();
      city.fillFromObject(cityItem);
      this.allCityList.push(city);
    }));
    return this.allCityList;
  }
}
