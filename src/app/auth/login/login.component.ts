import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../../common/models/user.model";
import {AuthService} from "../services/auth.service";
import {NotificationService} from "../../core/services/notification.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'wf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
  }

  login(event: Event): void {
    event.preventDefault();
    let user = new User();
    user.fillFromObject(this.loginForm.value);
    this.authService.authenticateUser(user)
      .then(result => this.router.navigate(['/home']))
      .catch(error => this.notificationService.showError(error));
  }
}
