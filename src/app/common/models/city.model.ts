import {Coord} from "./coord.model";

export class City {
  constructor(private _id: number = 0,
              private name: string = '',
              private country: string = '',
              private coord: Coord = new Coord()) {
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

  setCoord(coord: Coord): void {
    this.coord = coord;
  }

  getCoord(): Coord {
    return this.coord;
  }

  fillFromObj(cityObj: City): void {
    Object.assign(this, cityObj);
    let coord = new Coord();
    coord.fillFromObj(cityObj.coord);
    this.setCoord(coord);
  }
}
