/**
 *  sys
 *    sys.type - Internal parameter
 *    sys.id - Internal parameter
 *    sys.message - Internal parameter
 *    sys.country - Country code (GB, JP etc.)
 *    sys.sunrise - Sunrise time, unix, UTC
 *    sys.sunset - Sunset time, unix, UTC
 */
export class WfWeatherSys {
  constructor(private type: number = 0,
              private id: number = 0,
              private message: number = 0,
              private country: string = '',
              private sunrise: number = 0,
              private sunset: number = 0) {
  }

  setType(type: number): void {
    this.type = type;
  }

  getType(): number {
    return this.type;
  }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setMessage(message: number): void {
    this.message = message;
  }

  getMessage(): number {
    return this.message;
  }

  setCountry(country: string): void {
    this.country = country;
  }

  getCountry(): string {
    return this.country;
  }

  setSunRise(sunRise: number): void {
    this.sunrise = sunRise;
  }

  getSunRise(): number {
    return this.sunrise;
  }

  setSunSet(sunSet: number): void {
    this.sunset = sunSet;
  }

  getSunSet(): number {
    return this.sunset;
  }

  fillFromObject(sysInfo: WfWeatherSys): void {
    Object.assign(this, sysInfo);
  }
}
