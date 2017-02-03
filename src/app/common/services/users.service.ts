import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {StorageKeys} from "../constants";
import {LoggedUser} from "../models/logged-user.model";
import {User} from "../models/user.model";
import {StorageService} from "../../core/services/storage.service";

@Injectable()
export class UsersService {
  private users: User[];
  private loggedUser: LoggedUser;
  private storageKeys: StorageKeys;

  constructor(private storage: StorageService) {
    this.users = [
      new User('test', '1qaz2wsx')
    ];
    this.loggedUser = new LoggedUser();
    this.storageKeys = new StorageKeys();
  }

  setLoggedUser(user: User): void {
    this.loggedUser.setUserName(user.getUserName());
    this.storage.setKey(this.storageKeys.loggedUser, this.loggedUser);
  }

  getLoggedUser(): LoggedUser {
    let result: any | null = this.storage.getKey(this.storageKeys.loggedUser);
    if (result instanceof Object) {
      this.loggedUser.fillFromObject(result);
    }
    return this.loggedUser;
  }

  clearLoggedUser(): void {
    this.loggedUser.clear();
    this.storage.deleteKey(this.storageKeys.loggedUser);
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: User): Promise<User> {
    return new Promise((resolve, reject) => {
      let foundUser = _.find(this.users, user => user.getUserName() === newUser.getUserName());
      if (_.isEmpty(foundUser)) {
        this.users.push(newUser);
        return resolve(newUser);
      } else {
        return reject(new Error('User already exist.'));
      }
    });
  }

}


