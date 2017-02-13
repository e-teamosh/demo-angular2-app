import {Injectable} from "@angular/core";
import {WfHttpService} from "../../core/http-client/services/http.service";
import {API} from "../../core/http-client/api-def";
import {WfWeather} from "../../common/models/weather/weather.model";

@Injectable()
export class WfWeatherService {
  currentWeatherForecast: WfWeather;

  constructor(private http: WfHttpService) {
  }

  getWeatherByCityId(cityId: number): Promise<WfWeather> {
    return this.http.request(API.get.weatherByCityId(cityId))
      .then(result => {
        this.currentWeatherForecast = new WfWeather();
        this.currentWeatherForecast.fillFromObject(result);
        return this.currentWeatherForecast;
      })
      .catch(error => error);
  }

}
