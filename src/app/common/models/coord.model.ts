export class Coord {
  constructor(private lon: number = 0,
              private lat: number = 0) {}

  setLongitude(longitude: number): void {
    this.lon = longitude;
  }

  getLongitude(): number {
    return this.lon;
  }

  setLatitude(latitude: number): void {
    this.lat = latitude;
  }

  getLatitude(): number {
    return this.lat;
  }

  fillFromObj(coordObj: Coord): void {
    Object.assign(this, coordObj);
  }
}
