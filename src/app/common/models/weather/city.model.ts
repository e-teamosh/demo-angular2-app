import {WfCoord} from "./coord.model";

/**
 *  city
 *    city._id - City ID
 *    city.id - City ID
 *    city.name - City name
 *    city.country - Country code (GB, JP etc.)
 *    city.coord - Coordinates,
 *    city.population - Population
 */
export class WfCity {
  constructor(private _id: number = 0,
              private id: number = 0,
              private name: string = '',
              private country: string = '',
              private coord: WfCoord = new WfCoord(),
              private population: number = 0) {
  }

  setId(id: number): void {
    this._id = id;
    this.id = id;
  }

  getId(): number {
    return this.id || this._id;
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

  setPopulation(population: number): void {
    this.population = population;
  }

  getPopulation(): number {
    return this.population;
  }

  fillFromObject(cityObj: WfCity): void {
    Object.assign(this, cityObj);
    let coord = new WfCoord();
    coord.fillFromObject(cityObj.coord);
    this.setCoord(coord);
  }
}
