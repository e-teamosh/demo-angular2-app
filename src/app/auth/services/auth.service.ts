import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {WfUser} from "../../common/models/user.model";
import {WfUsersService} from "../../common/services/users.service";
import {WfStorageService} from "../../core/services/storage.service";
import {WfStorageKeys} from "../../common/constants";
import {WfSpinnerService, SPINNER} from "../../common/services/spinner.service";

@Injectable()
export class WfAuthService {
  constructor(private wfUsersService: WfUsersService,
              private wfStorageService: WfStorageService,
              private wfSpinnerService: WfSpinnerService) {
  }

  authenticateUser(user: WfUser): Promise<WfUser> {
    this.wfSpinnerService.showSpinner(SPINNER.LOGIN);
    return new Promise((resolve, reject) => {
      //TODO: remove timeout
      setTimeout(() => {
        const USERS = this.wfUsersService.getUsers();
        if (_.find(USERS, storedUser => user.getUserName() === storedUser.getUserName() && user.getPassword() === storedUser.getPassword())) {
          this.wfUsersService.setLoggedUser(user);
          this.wfSpinnerService.hideSpinner(SPINNER.LOGIN);
          return resolve(user);
        } else {
          console.log('Login failed. UserName is: "test", password is: "1qaz2wsx"');
          this.wfSpinnerService.hideSpinner(SPINNER.LOGIN);
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
    this.wfSpinnerService.showSpinner(SPINNER.SIGNUP);
    return this.wfUsersService.addUser(newUser)
      .then(result => {
        this.wfUsersService.setLoggedUser(newUser);
        this.wfSpinnerService.hideSpinner(SPINNER.SIGNUP);
        return result;
      })
      .catch(error => {
        console.log('SignUp failed. ' + error);
        this.wfSpinnerService.hideSpinner(SPINNER.SIGNUP);
        throw new Error('SignUp failed. User already exist.');
      });
  }

  logout(): Promise<boolean> {
    this.wfSpinnerService.showSpinner(SPINNER.LOGOUT);
    return new Promise(resolve => {
      //TODO: remove timeout
      setTimeout(() => {
        this.wfStorageService.clear();
        this.wfUsersService.clearLoggedUser();
        this.wfSpinnerService.hideSpinner(SPINNER.LOGOUT);
        return resolve(true);
      }, 1000);
    });

  }
}
