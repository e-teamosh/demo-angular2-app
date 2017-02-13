import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {WfUser} from "../../common/models/user/user.model";
import {WfUsersService} from "../../common/services/users.service";
import {WfStorageService} from "../../core/services/storage.service";
import {WfStorageKeys} from "../../common/constants";

@Injectable()
export class WfAuthService {
  constructor(private wfUsersService: WfUsersService,
              private wfStorageService: WfStorageService) {
  }

  authenticateUser(user: WfUser): Promise<WfUser> {
    return new Promise((resolve, reject) => {
      //TODO: remove timeout wrapper
      setTimeout(() => {
        const USERS = this.wfUsersService.getUsers();
        if (_.find(USERS, storedUser => user.getUserName() === storedUser.getUserName() && user.getPassword() === storedUser.getPassword())) {
          this.wfUsersService.setLoggedUser(user);
          return resolve(user);
        } else {
          console.log('Login failed. UserName is: "test", password is: "1qaz2wsx"');
          return reject(new Error('Login failed. Incorrect user name or password.'));
        }
      }, 1000);
    });
  }

  isAuthorized(): boolean {
    let storageKeys = new WfStorageKeys();
    return !!this.wfStorageService.getKey(storageKeys.loggedUser);
  }

  signUp(newUser: WfUser): Promise<WfUser> {
    return this.wfUsersService.addUser(newUser)
      .then(result => {
        this.wfUsersService.setLoggedUser(newUser);
        return result;
      })
      .catch(error => {
        console.log('SignUp failed. ' + error);
        throw new Error('SignUp failed. User already exist.');
      });
  }

  logout(): Promise<boolean> {
    return new Promise(resolve => {
      //TODO: remove timeout wrapper
      setTimeout(() => {
        this.wfStorageService.clear();
        this.wfUsersService.clearLoggedUser();
        return resolve(true);
      }, 1000);
    });
  }
}
