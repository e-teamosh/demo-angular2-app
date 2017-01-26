import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../../common/models/user.model";
import {AuthService} from "../services/auth.service";
import {NotificationService} from "../../core/services/notification.service";

@Component({
  moduleId: module.id,
  selector: 'wf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService) {
  }

  login(event: Event): void {
    event.preventDefault();
    this.authService.authenticateUser(new User(this.username, this.password))
      .then(result => this.router.navigate(['/home']))
      .catch(error => this.notificationService.showError(error));
  }
}
