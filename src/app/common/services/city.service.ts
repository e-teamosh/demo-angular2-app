import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {City} from "../models/city.model";
import {Http} from "@angular/http";

@Injectable()
export class CityService {
  private cityList: Array<City>;

  constructor(private http: Http) {
    this.cityList = new Array<City>();
  }

  getCityListFromJson(): void {
    this.http.get('./assets/city-list/city.list.us.json')
      .toPromise()
      .then(res => {
        let body = res.json();
        console.log(body);
        _.forEach(body, (cityItem => {
          let city = new City();
          city.fillFromObj(cityItem);
          this.cityList.push(city);
        }));
        console.dir(this.cityList);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
