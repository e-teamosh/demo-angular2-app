import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {WfCity} from "../../common/models/weather/city.model";
import {WfHttpService} from "../../core/http-client/services/http.service";
import {API} from "../../core/http-client/api-def";

@Injectable()
export class WfCityService {
  private allCityList: WfCity[];
  private countries: {}[];
  private cityByCountry: WfCity[];
  private foundCityList: WfCity[];

  constructor(private http: WfHttpService) {
    this.allCityList = [];
  }

  getAllCity(): Promise<WfCity[]> {
    if (_.isEmpty(this.allCityList)) {
      return this.getAllCityListFromJson();
    }
    return Promise.resolve(this.allCityList);
  }

  getAllCityListFromJson(): Promise<WfCity[]> {
    return this.http.request(API.get.cityList())
      .then(res => this.defineCityList(res))
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  getCountriesFromCityList(): Promise<string[]> {
    return new Promise(resolve => {
      if (_.isEmpty(this.countries)) {
        let countries = _.map(this.allCityList, 'country');
        let uniqueCountries = _.uniq(countries);
        this.countries = _.orderBy(uniqueCountries, [], true);
        return resolve(this.countries);
      }
      return resolve(this.countries);
    });
  }

  getCityListByCountry(country: string): WfCity[] {
    if (!_.isEmpty(this.cityByCountry)) {
      let foundCityByCountry = _.find(this.cityByCountry, city => city.getCountry() === country);
      if (foundCityByCountry) {
        return this.cityByCountry;
      }
    }
    return _.filter(this.allCityList, (cityItem) => cityItem.getCountry() === country);
  }

  getCityListByQuery(query: string, country: string): Promise<WfCity[]> {
    return new Promise(resolve => {
      // TODO: remove timeout wrapper
      setTimeout(() => {
        let cityListByCountry = this.getCityListByCountry(country);
        this.foundCityList = _.filter(cityListByCountry, (cityItem) => {
          return _.includes(cityItem.getName(), query);
        });
        return resolve(this.foundCityList);
      }, 1000);
    });
  }

  getCityById(cityId: number): Promise<WfCity> {
    return new Promise(resolve => resolve(_.find(this.foundCityList, (city) => city.getId() === cityId)));
  }

  private defineCityList(cities: Object): WfCity[] {
    this.allCityList.length = 0;
    _.forEach(cities, (cityItem => {
      let city = new WfCity();
      city.fillFromObject(cityItem);
      this.allCityList.push(city);
    }));
    return this.allCityList;
  }
}
