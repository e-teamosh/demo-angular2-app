/**
 *  weather - (more info Weather condition codes)
 *    weather.id - Weather condition id
 *    weather.main - Group of weather parameters (Rain, Snow, Extreme etc.)
 *    weather.description - Weather condition within the group
 *    weather.icon - Weather icon id
 */
export class WfWeatherCondition {
  constructor(private id: number = 0,
              private main: string = '',
              private description: string = '',
              private icon: string = '') {
  }

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setMain(main: string): void {
    this.main = main;
  }

  getMain(): string {
    return this.main;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getDescription(): string {
    return this.description;
  }

  setIcon(icon: string): void {
    this.icon = icon;
  }

  getIcon(): string {
    return this.icon;
  }

  fillFromObject(weather: WfWeatherCondition): void {
    Object.assign(this, weather);
  }
}
