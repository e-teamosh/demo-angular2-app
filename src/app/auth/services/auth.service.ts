import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {User} from "../../common/models/user.model";
import {UsersService} from "../../common/services/users.service";
import {StorageService} from "../../core/services/storage.service";
import {constants} from "../../common/constants";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private storage: StorageService) {
  }

  authenticateUser(user: User): Promise<User> {
    const USERS = this.usersService.getUsers();
    if (_.find(USERS, storedUser => user.getUserName() === storedUser.getUserName() && user.getPassword() === storedUser.getPassword())) {
      this.usersService.setLoggedUser(user);
      return Promise.resolve(user);
    } else {
      console.log('Login failed. UserName is: "test", password is: "1qaz2wsx"');
      return Promise.reject(new Error('Login failed. Incorrect user name or password.'));
    }
  }

  isAuthorized(): boolean {
    return !!this.storage.getKey(constants.storageKey.loggedUser);
  }

  signUp(newUser: User): Promise<User> {
    this.usersService.addUser(newUser);
    return Promise.resolve(newUser);
  }

  logout(): void {
    this.usersService.clearLoggedUser();
    this.storage.clear();
  }
}
