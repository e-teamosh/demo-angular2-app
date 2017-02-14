import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WfWeatherService} from "../services/weather.service";
import {WfWeather} from "../../common/models/weather/weather.model";
import {WfNotificationService} from "../../core/services/notification.service";
import {WfSpinnerService, SPINNER} from "../../common/spinner-controls/services/spinner.service";
import {WfForecast} from "../../common/models/weather/forecast.model";

@Component({
  moduleId: module.id,
  selector: 'wf-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WfWeatherComponent implements OnInit {
  spinnerIndex = SPINNER.GLOBAL;
  weather: WfWeather;
  forecast: WfForecast;

  constructor(private route: ActivatedRoute,
              private wfWeatherService: WfWeatherService,
              private wfNotificationService: WfNotificationService,
              private wfSpinnerService: WfSpinnerService) {
  }

  ngOnInit() {
    this.wfSpinnerService.showSpinner(this.spinnerIndex);
    let cityId = +this.route.snapshot.params['cityId'];
    let weatherPromise = this.wfWeatherService.getWeatherByCityId(cityId);
    let forecastPromise = this.wfWeatherService.getForecastByCityId(cityId);
    //TODO: remove timeout wrapper
    setTimeout(() => {
      Promise.all([weatherPromise, forecastPromise])
        .then(result => {
          if (result[0] instanceof WfWeather) {
            console.log('GOOD-0');
          }
          this.weather = result[0];
          if (result[1] instanceof WfForecast) {
            console.log('GOOD-1');
          }
          this.forecast = result[1];
          console.log('Weather Obj:', this.weather);
          console.log('Forecast Obj:', this.forecast);
          this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        })
        .catch(error => {
          this.wfNotificationService.showError(error);
          this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        });
    }, 1000);
  }

}
