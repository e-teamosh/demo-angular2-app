import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {WfUser} from "../../common/models/user.model";
import {WfAuthService} from "../services/auth.service";
import {WfNotificationService} from "../../core/services/notification.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SPINNER, WfSpinnerService} from "../../common/services/spinner.service";

@Component({
  moduleId: module.id,
  selector: 'wf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class WfLoginComponent implements OnInit {
  loginForm: FormGroup;
  spinnerIndex: number = SPINNER.LOGIN;

  constructor(private router: Router,
              private wfAuthService: WfAuthService,
              private wfNotificationService: WfNotificationService,
              private formBuilder: FormBuilder,
              private wfSpinnerService: WfSpinnerService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
  }

  login(event: Event): void {
    event.preventDefault();
    this.wfSpinnerService.showSpinner(this.spinnerIndex);
    let user = new WfUser();
    user.fillFromObject(this.loginForm.value);
    this.wfAuthService.authenticateUser(user)
      .then(result => {
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.wfNotificationService.showError(error);
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
      });
  }
}
