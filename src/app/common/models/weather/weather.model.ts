import {WfCoord} from "./coord.model";
import {WfWeatherCondition} from "./weather-condition.model";
import {WfTemperature} from "./temperature.model";
import {WfWind} from "./wind.model";
import {WfClouds} from "./clouds.model";
import {WfWeatherSys} from "./weather-sys.model";
/**
 *  coord - Coordinates
 *  weather - (more info Weather condition codes)
 *  base - Internal parameter
 *  main - Temperature, pressure, humidity
 *  wind - Wind
 *  clouds - Cloudiness
 *  dt - Time of data calculation, unix, UTC
 *  sys - Sys info
 *  id - City ID
 *  name - City name
 *  cod - Internal parameter
 *  visibility - Visibility, meters
 */
export class WfWeather {
  constructor(private coord: WfCoord = new WfCoord(),
              private weather: WfWeatherCondition[] = [],
              private base: string = '',
              private main: WfTemperature = new WfTemperature(),
              private wind: WfWind = new WfWind(),
              private clouds: WfClouds = new WfClouds(),
              private dt: number = 0,
              private sys: WfWeatherSys = new WfWeatherSys(),
              private id: number = 0,
              private name: string = '',
              private cod: number = 0,
              private visibility: number = 0) {
  }

  setCoord(coord: WfCoord): void {
    this.coord = coord;
  }

  getCoord(): WfCoord {
    return this.coord;
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

  setBase(base: string): void {
    this.base = base;
  }

  getBase(): string {
    return this.base;
  }

  setMain(main: WfTemperature): void {
    this.main = main;
  }

  getMain(): WfTemperature {
    return this.main;
  }

  setWind(wind: WfWind): void {
    this.wind = wind;
  }

  getWind(): WfWind {
    return this.wind;
  }

  setClouds(clouds: WfClouds): void {
    this.clouds = clouds;
  }

  getClouds(): WfClouds {
    return this.clouds;
  }

  setTime(unixTimeStamp: number): void {
    this.dt = unixTimeStamp;
  }

  getTime(): number {
    return this.dt;
  }

  setWeatherSys(sysInfo: WfWeatherSys): void {
    this.sys = sysInfo;
  }

  getWeatherSys(): WfWeatherSys {
    return this.sys;
  }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCod(cod: number): void {
    this.cod = cod;
  }

  getCod(): number {
    return this.cod;
  }

  setVisibility(visibility: number): void {
    this.visibility = visibility;
  }

  getVisibility(): number {
    return this.visibility;
  }

  fillFromObject(weatherObj: WfWeather): void {
    Object.assign(this, weatherObj);

    let coord = new WfCoord();
    coord.fillFromObject(weatherObj.coord);
    this.setCoord(coord);

    let weather = new Array();
    for(let item of weatherObj.weather) {
      let _weather = new WfWeatherCondition();
      _weather.fillFromObject(item);
      weather.push(_weather);
    }
    this.setWeather(weather);

    let main = new WfTemperature();
    main.fillFromObject(weatherObj.main);
    this.setMain(main);

    let wind = new WfWind();
    wind.fillFromObject(weatherObj.wind);
    this.setWind(wind);

    let clouds = new WfClouds();
    clouds.fillFromObject(weatherObj.clouds);
    this.setClouds(clouds);

    let sys = new WfWeatherSys();
    sys.fillFromObject(weatherObj.sys);
    this.setWeatherSys(sys);
  }
}
