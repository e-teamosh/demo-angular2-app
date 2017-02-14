import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import * as _ from "lodash";
import {WfWeatherService} from "../services/weather.service";
import {WfWeather} from "../../common/models/weather/weather.model";
import {WfNotificationService} from "../../core/services/notification.service";
import {WfForecast} from "../../common/models/weather/forecast.model";
import {WfListItemForecast} from "../../common/models/weather/list-item-forecast.model";

@Component({
  moduleId: module.id,
  selector: 'wf-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WfWeatherComponent implements OnInit {
  weather: WfWeather;
  forecast: WfForecast;

  constructor(private route: ActivatedRoute,
              private wfWeatherService: WfWeatherService,
              private wfNotificationService: WfNotificationService) {
  }

  ngOnInit() {
    // '+' auto convert params to integer form string
    let cityId = +this.route.snapshot.params['cityId'];
    let weatherPromise = this.wfWeatherService.getWeatherByCityId(cityId);
    let forecastPromise = this.wfWeatherService.getForecastByCityId(cityId);
    Promise.all<WfWeather, WfForecast>([weatherPromise, forecastPromise])
      .then((result) => {
        this.weather = result[0];
        this.forecast = result[1];
        console.log('Forecast Obj:', this.forecast);
      })
      .catch(error => {
        this.wfNotificationService.showError(error);
      });
  }
  //
  // private reMapForecast(forecast): {[key: string] : WfListItemForecast[]} {
  //   if (this.forecast) {
  //     let forecastList = this.forecast.getForecast();
  //     let newForecastList: {[key: string] : WfListItemForecast[]} = {};
  //     _.forEach(forecastList, (item, index) => {
  //       let utcDate = item.getUTCDate();
  //       let key = [
  //         utcDate.getStringUTCDay(),
  //         utcDate.getStringUTCMonth(),
  //         utcDate.getStringUTCYear()
  //       ].join('/');
  //       let date = utcDate.getUTCDay();
  //       if (_.isEmpty(newForecastList[key])) {
  //         newForecastList[key] = [];
  //       }
  //       newForecastList[key].push(item);
  //     });
  //     return newForecastList;
  //   }
  //   return;
  // }

}
