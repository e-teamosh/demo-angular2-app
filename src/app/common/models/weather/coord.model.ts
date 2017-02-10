/**
 *  coord
 *    coord.lon - City geo location, longitude
 *    coord.lat - City geo location, latitude
 */
export class WfCoord {
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

  fillFromObject(coordObj: WfCoord): void {
    Object.assign(this, coordObj);
  }
}
