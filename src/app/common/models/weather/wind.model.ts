/**
 *  wind
 *    wind.speed - Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 *    wind.deg - Wind direction, degrees (meteorological)
 *    wind.gust - Gust
 */
export class WfWind {
  constructor(private speed: number = 0,
              private deg: number = 0,
              private gust: number = 0) {
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }

  getSpeed(): number {
    return this.speed;
  }

  setDegree(degree: number): void {
    this.deg = degree;
  }

  getDegree(): number {
    return this.deg;
  }

  setGust(gust: number): void {
    this.gust = gust;
  }

  getGust(): number {
    return this.gust;
  }

  fillFromObject(wind: WfWind): void {
    Object.assign(this, wind);
  }
}
