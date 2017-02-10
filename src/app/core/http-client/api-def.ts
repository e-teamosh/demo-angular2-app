import {RequestMethod, Request, RequestOptions, URLSearchParams} from "@angular/http";
import {environment} from "../../../environments/environment";
import {WfUnitsFormat} from "../../common/constants";

let optionsGET = new RequestOptions({
  method: RequestMethod.Get
});

let units = new WfUnitsFormat();
let defaultWeatherSearchParams = `appid=${environment.apiKey}&units=${units.fahrenheit}`;

function makeFullWeatherApiUrl(url: string): string {
  return [environment.apiUrl, url].join('');
}

export const API = {
  get: {
    cityList: () => new Request(optionsGET.merge({
      url: './assets/city-list/city.list.us.json'
    })),
    weatherByCityId: (cityId: number) => {
      let url = 'weather';
      let searchParams = new URLSearchParams(defaultWeatherSearchParams);
      searchParams.set('id', cityId.toString());
      return new Request(optionsGET.merge({
        url: makeFullWeatherApiUrl(url),
        search: searchParams
      }))
    }
  }
};
