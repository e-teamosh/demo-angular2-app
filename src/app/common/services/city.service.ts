import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {WfCity} from "../models/city.model";
import {WfSpinnerService, SPINNER} from "./spinner.service";
import {WfHttpService} from "../../core/http-client/services/http.service";
import {API} from "../../core/http-client/api-def";

@Injectable()
export class WfCityService {
  private allCityList: WfCity[];
  private foundCityList: WfCity[];

  constructor(private http: WfHttpService,
              private wfSpinnerService: WfSpinnerService) {
    this.allCityList = [];
  }

  getAllCityListFromJson(): Promise<WfCity[]>{
    return this.http.request(API.get.cityList())
      .then(res => this.defineCityList(res))
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
        this.foundCityList = _.filter(cityListByCountry, (cityItem) => {
          return _.includes(cityItem.getName(), query);
        });
        this.wfSpinnerService.hideSpinner(SPINNER.SEARCH);
        return resolve(this.foundCityList);
      }, 1000);
    });
  }

  getCityById(cityId: number): Promise<WfCity> {
    return new Promise(resolve => resolve(_.find(this.foundCityList, (city) => city.getId() === cityId)));
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
