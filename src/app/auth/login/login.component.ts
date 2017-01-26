import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {UsersService} from "../../common/services/users.service";

@Component({
  moduleId: module.id,
  selector: 'wf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private username: string = '';
  private password: string = '';

  constructor(
    private router: Router,
    private usersService: UsersService
  ) {}

  login(event: Event): void {
    event.preventDefault();
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);
    if (this.usersService.checkUser(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      console.log("Login error. Type userName is: test, and password is: 1qaz2wsx");
    }

  }
}
