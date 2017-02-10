/**
 *  main
 *    main.temp - Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *    main.pressure - Atmospheric pressure (on the sea level, if there is no sea_level
 *                    or grnd_level data), hPa
 *    main.humidity - Humidity, %
 *    main.temp_min - Minimum temperature at the moment. This is deviation from current temp
 *                    that is possible for large cities and megalopolises geographically expanded
 *                    (use these parameter optionally).
 *                    Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *    main.temp_max - Maximum temperature at the moment. This is deviation from current temp that
 *                    is possible for large cities and megalopolises geographically expanded (use
 *                    these parameter optionally).
 *                    Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *    main.sea_level - Atmospheric pressure on the sea level, hPa
 *    main.grnd_level - Atmospheric pressure on the ground level, hPa
 */
export class WfTemperature {
  constructor(private temp: number = 0,
              private pressure: number = 0,
              private humidity: number = 0,
              private temp_min: number = 0,
              private temp_max: number = 0,
              private sea_level: number = 0,
              private grnd_level: number = 0) {
  }

  setTemp(temp: number): void {
    this.temp = temp;
  }

  getTemp(): number {
    return this.temp;
  }

  setPressure(pressure: number): void {
    this.pressure = pressure;
  }

  getPressure(): number {
    return this.pressure;
  }

  setHumidity(humidity: number): void {
    this.humidity = humidity;
  }

  getHumidity(): number {
    return this.humidity;
  }

  setTempMin(tempMin: number): void {
    this.temp_min = tempMin;
  }

  getTempMin(): number {
    return this.temp_min;
  }

  setTempMax(tempMax: number): void {
    this.temp_max = tempMax;
  }

  getTempMax(): number {
    return this.temp_max;
  }

  setSeaLevel(seaLevel: number): void {
    this.sea_level = seaLevel;
  }

  getSeaLevel(): number {
    return this.sea_level;
  }

  setGrndLevel(grndLevel: number): void {
    this.grnd_level = grndLevel;
  }

  getGrndLevel(): number {
    return this.grnd_level;
  }

  fillFromObject(main: WfTemperature): void {
    Object.assign(this, main);
  }
}
