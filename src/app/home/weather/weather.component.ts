import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WfWeatherService} from "../services/weather.service";
import {WfWeather} from "../../common/models/weather/weather.model";
import {WfNotificationService} from "../../core/services/notification.service";
import {WfForecast} from "../../common/models/weather/forecast.model";

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
    Promise.all([weatherPromise, forecastPromise])
      .then(result => {
        this.weather = result[0];
        this.forecast = result[1];
        console.log('Forecast Obj:', this.forecast);
      })
      .catch(error => {
        this.wfNotificationService.showError(error);
      });
  }

}
