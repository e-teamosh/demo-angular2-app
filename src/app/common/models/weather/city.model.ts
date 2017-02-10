import {WfCoord} from "./coord.model";

/**
 *  city
 *    city._id - City ID
 *    city.name - City name
 *    city.country - Country code (GB, JP etc.)
 *    city.coord - Coordinates
 */
export class WfCity {
  constructor(private _id: number = 0,
              private name: string = '',
              private country: string = '',
              private coord: WfCoord = new WfCoord()) {
  }

  setId(id: number): void {
    this._id = id;
  }

  getId(): number {
    return this._id;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCountry(country: string): void {
    this.country = country;
  }

  getCountry(): string {
    return this.country;
  }

  setCoord(coord: WfCoord): void {
    this.coord = coord;
  }

  getCoord(): WfCoord {
    return this.coord;
  }

  fillFromObject(cityObj: WfCity): void {
    Object.assign(this, cityObj);
    let coord = new WfCoord();
    coord.fillFromObject(cityObj.coord);
    this.setCoord(coord);
  }
}
