import {Injectable} from "@angular/core";
import {WfHttpService} from "../../core/http-client/services/http.service";
import {API} from "../../core/http-client/api-def";

@Injectable()
export class WfWeatherService {

  constructor(private http: WfHttpService) {
  }

  getWeatherByCityId(cityId: number): Promise<any> {
    return this.http.request(API.get.weatherByCityId(cityId))
      .then(result => result)
      .catch(error => error);
  }

}
