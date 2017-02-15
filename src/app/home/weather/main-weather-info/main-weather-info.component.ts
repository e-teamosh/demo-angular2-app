import {Component, Input} from "@angular/core";
import {WfWeather} from "../../../common/models/weather/weather.model";
import {WfForecast} from "../../../common/models/weather/forecast.model";

@Component({
  moduleId: module.id,
  selector: 'wf-main-weather-info',
  templateUrl: './main-weather-info.component.html',
  styleUrls: ['./main-weather-info.component.scss']
})
export class WfMainWeatherInfoComponent {
  @Input() weather: WfWeather | WfForecast;
}
