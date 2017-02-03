import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {WfUser} from "../../common/models/user.model";
import {WfAuthService} from "../services/auth.service";
import {WfNotificationService} from "../../core/services/notification.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'wf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class WfLoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router,
              private wfAuthService: WfAuthService,
              private wfNotificationService: WfNotificationService,
              private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
  }

  login(event: Event): void {
    event.preventDefault();
    let user = new WfUser();
    user.fillFromObject(this.loginForm.value);
    this.wfAuthService.authenticateUser(user)
      .then(result => this.router.navigate(['/home']))
      .catch(error => this.wfNotificationService.showError(error));
  }
}
