import {WfCity} from "./city.model";
import {WfListItemForecast} from "./list-item-forecast.model";

/**
 *  cod - Internal parameter
 *  message - Internal parameter
 *  city - City
 *  cnt - Number of lines returned by this API call
 *  list - 5 days forecast
 */
export class WfForecast {
  constructor(private cod: string = '',
              private message: number = 0,
              private city: WfCity = new WfCity(),
              private cnt: number = 0,
              private list: WfListItemForecast[] = []) {
  }

  setCod(cod: string): void {
    this.cod = cod;
  }

  getCod(): string {
    return this.cod;
  }

  setMesage(message: number): void {
    this.message = message;
  }

  getMessage(): number {
    return this.message;
  }

  setCity(city: WfCity): void {
    this.city = city;
  }

  getCity(): WfCity {
    return this.city;
  }

  setCnt(cnt: number): void {
    this.cnt = cnt;
  }

  getCnt(): number {
    return this.cnt;
  }

  setForecast(forecast: WfListItemForecast[]): void {
    this.list = forecast;
  }

  setForecastByIndex(index: number, forecast: WfListItemForecast): void {
    this.list[index] = forecast;
  }

  getForecast(): WfListItemForecast[] {
    return this.list;
  }

  getForecastByIndex(index: number): WfListItemForecast {
    return this.list[index];
  }

  fillFromObject(forecastObj: WfForecast): void {
    Object.assign(this, forecastObj);

    let city = new WfCity();
    city.fillFromObject(forecastObj.city);
    this.setCity(city);

    let forecast = new Array();
    for(let item of forecastObj.list) {
      let _forecast = new WfListItemForecast();
      _forecast.fillFromObject(item);
      forecast.push(_forecast);
    }
    this.setForecast(forecast);
  }
}
