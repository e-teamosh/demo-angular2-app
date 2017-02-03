import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {WfStorageKeys} from "../constants";
import {WfLoggedUser} from "../models/logged-user.model";
import {WfUser} from "../models/user.model";
import {WfStorageService} from "../../core/services/storage.service";

@Injectable()
export class WfUsersService {
  private users: WfUser[];
  private loggedUser: WfLoggedUser;
  private storageKeys: WfStorageKeys;

  constructor(private wfStorageService: WfStorageService) {
    this.users = [
      new WfUser('test', '1qaz2wsx')
    ];
    this.loggedUser = new WfLoggedUser();
    this.storageKeys = new WfStorageKeys();
  }

  setLoggedUser(user: WfUser): void {
    this.loggedUser.setUserName(user.getUserName());
    this.wfStorageService.setKey(this.storageKeys.loggedUser, this.loggedUser);
  }

  getLoggedUser(): WfLoggedUser {
    let result: any | null = this.wfStorageService.getKey(this.storageKeys.loggedUser);
    if (result instanceof Object) {
      this.loggedUser.fillFromObject(result);
    }
    return this.loggedUser;
  }

  clearLoggedUser(): void {
    this.loggedUser.clear();
    this.wfStorageService.deleteKey(this.storageKeys.loggedUser);
  }

  getUsers(): WfUser[] {
    return this.users;
  }

  addUser(newUser: WfUser): Promise<WfUser> {
    return new Promise((resolve, reject) => {
      let foundUser = _.find(this.users, user => user.getUserName() === newUser.getUserName());
      if (_.isEmpty(foundUser)) {
        this.users.push(newUser);
        return resolve(newUser);
      } else {
        return reject(new Error('WfUser already exist.'));
      }
    });
  }

}


