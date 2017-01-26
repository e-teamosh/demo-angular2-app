import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {User} from "../../common/models/user.model";
import {UsersService} from "../../common/services/users.service";
import {StorageService} from "../../core/services/storage.service";
import {constants} from "../../common/constants";
import {USERS} from "../../common/data/users";

@Injectable()
export class AuthService {
  private users: User[] = USERS;

  constructor(private usersService: UsersService,
              private storage: StorageService) {
  }

  authenticateUser(user: User): Promise<User> {
    if (_.find(this.users, storedUser => user.getUserName() === storedUser.getUserName() && user.getPassword() === storedUser.getPassword())) {
      this.usersService.setLoggedUser(user);
      return Promise.resolve(user);
    } else {
      return Promise.reject("User not found.")
    }
  }

  isAuthorized(): boolean {
    return !!this.storage.getKey(constants.storageKey.loggedUser);
  }

  logout(): void {
    this.usersService.clearLoggedUser();
    this.storage.clear();
  }
}
