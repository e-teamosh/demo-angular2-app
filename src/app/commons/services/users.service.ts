import {Injectable} from '@angular/core';
import * as _ from "lodash";

import {User} from '../models/user.model';
import {USERS} from '../data/users';

@Injectable()
export class UsersService {
  private users: User[] = USERS;
  private loggedUser: User = new User('', '');

  public getLoggedUser(): User {
    return this.loggedUser;
  }

  public clearLoggedUser(): void {
    this.loggedUser.setUserName('');
    this.loggedUser.setPassword('');
  }

  public addUser(newUser: User): void {
    this.users.push(newUser);
  }

  public getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  public checkUser(userName: string, password: string): boolean {
    let result: boolean = false;
    if(_.find(this.users, user => user.getUserName() === userName && user.getPassword() === password)) {
      result = true;
      this.loggedUser.setUserName(userName);
      this.loggedUser.setPassword(password);
    }
    return result;
  }


}


