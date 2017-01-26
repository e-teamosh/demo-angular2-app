import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../../common/models/user.model";
import {AuthService} from "../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'wf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private username: string = '';
  private password: string = '';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  login(event: Event): void {
    event.preventDefault();
    this.authService.authenticateUser(new User(this.username, this.password))
      .then(result => this.router.navigate(['/home']))
      .catch(error => {
        console.log(error);
        console.log("Login error. Type userName is: test, and password is: 1qaz2wsx")
      });
  }
}
