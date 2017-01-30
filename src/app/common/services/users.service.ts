import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {constants} from "../constants";
import {LoggedUser} from "../models/logged-user.model";
import {User} from "../models/user.model";
import {StorageService} from "../../core/services/storage.service";

@Injectable()
export class UsersService {
  private users: User[];
  private loggedUser: LoggedUser;

  constructor(private storage: StorageService) {
    this.users = [
      new User('test', '1qaz2wsx')
    ];
    this.loggedUser = new LoggedUser();
  }

  setLoggedUser(user: User): void {
    this.loggedUser.setUserName(user.getUserName());
    this.storage.setKey(constants.storageKey.loggedUser, this.loggedUser);
  }

  getLoggedUser(): LoggedUser {
    let result = this.storage.getKey(constants.storageKey.loggedUser);
    if (result instanceof Object) {
      this.loggedUser.setUserName(result.userName);
    }
    return this.loggedUser;
  }

  clearLoggedUser(): void {
    this.loggedUser.clear();
    this.storage.deleteKey(constants.storageKey.loggedUser);
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: User): Promise<User> {
    let foundUser = _.find(this.users, user => user.getUserName() === newUser.getUserName());
    if (_.isEmpty(foundUser)) {
      this.users.push(newUser);
      return Promise.resolve(newUser);
    } else {
      return Promise.reject(new Error('User already exist.'));
    }
  }

}


