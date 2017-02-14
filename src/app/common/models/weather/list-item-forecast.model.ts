import {WfTemperature} from "./temperature.model";
import {WfWeatherCondition} from "./weather-condition.model";
import {WfClouds} from "./clouds.model";
import {WfWind} from "./wind.model";
import {WfUTCDate} from "./utc-date.model";
/**
 *  list
 *    list.dt - Time of data forecasted, unix, UTC
 *    list.dt_txt - Data/time of caluclation, UTC
 *    list.main - Weather temperature, pressure and humidity
 *    list.weather - (more info Weather condition codes)
 *    list.clouds - Cloudiness
 *    list.wind - Wind
 */
export class WfListItemForecast {
  constructor(private dt: number = 0,
              private dt_txt: string = '',
              private main: WfTemperature = new WfTemperature(),
              private weather: WfWeatherCondition[] = [],
              private clouds: WfClouds = new WfClouds(),
              private wind: WfWind = new WfWind(),
              private utcDate: WfUTCDate = new WfUTCDate()) {
  }

  setTime(unixTimeStamp: number): void {
    this.dt = unixTimeStamp;
  }

  getTime(): number {
    return this.dt;
  }

  setDateTimeTxt(dateTime: string): void {
    this.dt_txt = dateTime;
  }

  getDateTimeTxt(): string {
    return this.dt_txt;
  }

  setMain(main: WfTemperature): void {
    this.main = main;
  }

  getMain(): WfTemperature {
    return this.main;
  }

  setWeather(weather: WfWeatherCondition[]): void {
    this.weather = weather;
  }

  setWeatherByIndex(index: number, weather: WfWeatherCondition): void {
    this.weather[index] = weather;
  }

  getWeather(): WfWeatherCondition[] {
    return this.weather;
  }

  getWeatherByIndex(index: number): WfWeatherCondition {
    return this.weather[index];
  }

  setClouds(clouds: WfClouds): void {
    this.clouds = clouds;
  }

  getClouds(): WfClouds {
    return this.clouds;
  }

  setWind(wind: WfWind): void {
    this.wind = wind;
  }

  getWind(): WfWind {
    return this.wind;
  }

  setUTCDate(unixTimeStamp: number): void {
    this.utcDate = new WfUTCDate(unixTimeStamp);
  }

  getUTCDate(): WfUTCDate {
    return this.utcDate;
  }

  fillFromObject(itemForecastObj: WfListItemForecast): void {
    Object.assign(this, itemForecastObj);

    let weather = new Array();
    for(let item of itemForecastObj.weather) {
      let _weather = new WfWeatherCondition();
      _weather.fillFromObject(item);
      weather.push(_weather);
    }
    this.setWeather(weather);

    let main = new WfTemperature();
    main.fillFromObject(itemForecastObj.main);
    this.setMain(main);

    let wind = new WfWind();
    wind.fillFromObject(itemForecastObj.wind);
    this.setWind(wind);

    let clouds = new WfClouds();
    clouds.fillFromObject(itemForecastObj.clouds);
    this.setClouds(clouds);

    this.setUTCDate(this.dt);
  }
}
