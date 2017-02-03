import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {City} from "../models/city.model";
import {Http} from "@angular/http";

@Injectable()
export class CityService {
  private allCityList: City[];

  constructor(private http: Http) {
    this.allCityList = [];
  }

  getAllCityListFromJson(): Promise<City[]>{
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

  getCityListByCountry(country: string): City[] {
    return _.filter(this.allCityList, (cityItem) => cityItem.getCountry() === country);
  }

  getCityListByQuery(query: string, country: string): Promise<City[]> {
    return new Promise(resolve => {
      let cityListByCountry = this.getCityListByCountry(country);
      let foundCityList = _.filter(cityListByCountry, (cityItem) => {
        return _.includes(cityItem.getName(), query);
      });
      return resolve(foundCityList);
    });
}

  private defineCityList(cities: Object): City[] {
    _.forEach(cities, (cityItem => {
      let city = new City();
      city.fillFromObject(cityItem);
      this.allCityList.push(city);
    }));
    return this.allCityList;
  }
}
