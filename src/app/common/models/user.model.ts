import {UserBasic} from "../interfaces/user-basic.interface";
import {UserPassword} from "../interfaces/user-password.interface";

export class User implements UserBasic, UserPassword {
  userName: string;
  password: string;

  constructor(userName: string, password: string) {
    this.setUserName(userName);
    this.setPassword(password);
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }
}
