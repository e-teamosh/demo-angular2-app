import {Injectable} from "@angular/core";
import {WfHttpService} from "../../core/http-client/services/http.service";
import {API} from "../../core/http-client/api-def";
import {WfWeather} from "../../common/models/weather/weather.model";

@Injectable()
export class WfWeatherService {
  constructor(private http: WfHttpService) {
  }

  getWeatherByCityId(cityId: number): Promise<WfWeather> {
    return this.http.request(API.get.weatherByCityId(cityId))
      .then(result => {
        let weather = new WfWeather();
        weather.fillFromObject(result);
        return weather;
      })
      .catch(error => error);
  }

  getForecastByCityId(cityId: number): Promise<any> {
    return this.http.request(API.get.forecastByCityId(cityId))
      .then(result => {
        return result;
      })
      .catch(error => error);
  }
}
