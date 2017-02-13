import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WfWeatherService} from "../services/weather.service";
import {WfWeather} from "../../common/models/weather/weather.model";
import {WfNotificationService} from "../../core/services/notification.service";
import {WfSpinnerService, SPINNER} from "../../common/spinner-controls/services/spinner.service";

@Component({
  moduleId: module.id,
  selector: 'wf-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WfWeatherComponent implements OnInit {
  spinnerIndex = SPINNER.GLOBAL;
  currentWeatherForecast: WfWeather;

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
          this.currentWeatherForecast = result[0];
          console.log('Weather Obj:', this.currentWeatherForecast);
          console.log('Forecast JSON:', result[1]);
          this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        })
        .catch(error => {
          this.wfNotificationService.showError(error);
          this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        });
    }, 1000);
  }

}
