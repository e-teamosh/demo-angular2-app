export class WfUTCDate {
  private year: number;
  private month: number;
  private day: number;
  private hours: number;
  private minutes: number;
  private seconds: number;

  constructor(unixTimeStamp?: number) {
    if (unixTimeStamp) {
      let date = new Date(unixTimeStamp * 1000);
      this.setUTCYear(date.getFullYear());
      this.setUTCMonth(date.getMonth());
      this.setUTCDay(date.getUTCDate());
      this.setUTCHours(date.getUTCHours());
      this.setUTCMinutes(date.getUTCMinutes());
      this.setUTCSeconds(date.getUTCSeconds());
    }
  }

  setUTCYear(year: number): void {
    this.year = year;
  }

  getUTCYear(): number {
    return this.year;
  }

  getStringUTCYear(): string {
    return this.year.toString();
  }

  setUTCMonth(month: number): void {
    this.month = month + 1;
  }

  getUTCMonth(): number {
    return this.month;
  }

  getStringUTCMonth(): string {
    return this.convertToString(this.month);
  }

  setUTCDay(day: number): void {
    this.day = day;
  }

  getUTCDay(): number {
    return this.day;
  }

  getStringUTCDay(): string {
    return this.convertToString(this.day);
  }

  setUTCHours(hours: number): void {
    this.hours = hours;
  }

  getUTCHours(): number {
    return this.hours;
  }

  getStringUTCHours(): string {
    return this.convertToString(this.hours);
  }

  setUTCMinutes(minutes: number): void {
    this.minutes = minutes;
  }

  getUTCMinutes(): number {
    return this.minutes;
  }

  getStringUTCMinutes(): string {
    return this.convertToString(this.minutes);
  }

  setUTCSeconds(seconds: number): void {
    this.seconds = seconds;
  }

  getUTCSeconds(): number {
    return this.seconds;
  }

  getStringUTCSeconds(): string {
    return this.convertToString(this.seconds);
  }

  private convertToString(num: number): string {
    let stringNum = num.toString();
    if (num < 10) {
      stringNum = ['0', stringNum].join('');
    }
    return stringNum;
  }
}
