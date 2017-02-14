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
              private list: Array<WfListItemForecast> = [],
              private groupedForecast: GroupedForecast = {}) {
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

  setForecast(forecast: GroupedForecast): void {
    this.groupedForecast = forecast;
  }

  getForecast(): GroupedForecast {
    return this.groupedForecast;
  }

  fillFromObject(forecastObj: WfForecast): void {
    Object.assign(this, forecastObj);

    let city = new WfCity();
    city.fillFromObject(forecastObj.city);
    this.setCity(city);

    let forecast = this.groupForecast(forecastObj.list);
    this.setForecast(forecast);
  }

  private groupForecast(forecastList: Array<WfListItemForecast>): GroupedForecast {
    let newForecastList: GroupedForecast = {};
    for(let item of forecastList) {
      let _itemForecast = new WfListItemForecast();
      _itemForecast.fillFromObject(item);
      let utcDate = _itemForecast.getUTCDate();
      let key = [
        utcDate.getStringUTCDay(),
        utcDate.getStringUTCMonth(),
        utcDate.getStringUTCYear()
      ].join('/');
      if (!newForecastList[key]) {
        newForecastList[key] =  [];
      }
      newForecastList[key].push(_itemForecast);
    }
    return newForecastList;
  }
}

interface GroupedForecast {
  [key: string]: WfListItemForecast[]
}
