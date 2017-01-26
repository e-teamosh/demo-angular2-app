import {UserBasic} from "../interfaces/user-basic.interface";

export class LoggedUser implements UserBasic {
  userName: string;

  constructor(userName: string = '') {
    this.setUserName(userName);
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  clear(): void {
    this.setUserName('');
  }
}
