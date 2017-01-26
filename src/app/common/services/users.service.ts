import {Injectable} from '@angular/core';
import * as _ from "lodash";

import {User} from '../models/user.model';
import {USERS} from '../data/users';

@Injectable()
export class UsersService {
  private users: User[] = USERS;
  private loggedUser: User = new User('', '');

  getLoggedUser(): User {
    return this.loggedUser;
  }

  clearLoggedUser(): void {
    this.loggedUser.setUserName('');
    this.loggedUser.setPassword('');
  }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  checkUser(userName: string, password: string): boolean {
    let result: boolean = false;
    if(_.find(this.users, user => user.getUserName() === userName && user.getPassword() === password)) {
      result = true;
      this.loggedUser.setUserName(userName);
      this.loggedUser.setPassword(password);
    }
    return result;
  }


}


