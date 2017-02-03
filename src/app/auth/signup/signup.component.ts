import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, CanDeactivate} from "@angular/router";
import * as _ from "lodash";
import {WfUser} from "../../common/models/user.model";
import {equalPassword, isPasswordMismatchError} from "../../common/validators/equalPassword.validator";
import {USER_NAME_MAX_LENGTH, WfCustomValidationErrors} from "../../common/constants";
import {WfAuthService} from "../services/auth.service";
import {WfDialogService} from "../../core/dialog/services/dialog.service";
import {WfNotificationService} from "../../core/services/notification.service";
import {CanComponentDeactivate} from "../../common/services/can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'wf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class WfSignupComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {
  signupForm: FormGroup;
  formSubmitted: boolean;
  validationErrors: WfCustomValidationErrors;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private wfAuthService: WfAuthService,
              private wfDialogService: WfDialogService,
              private wfNotificationService: WfNotificationService,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.maxLength(USER_NAME_MAX_LENGTH)])],
      password: ['', Validators.compose([Validators.required, equalPassword('confirmPassword')])],
      confirmPassword: ['', Validators.compose([Validators.required, equalPassword('password')])]
    });

    this.validationErrors = new WfCustomValidationErrors();
    // this.validationErrors.passwordMismatch = CONSTANTS.customValidationErrors.passwordMismatch.message;
    // this.validationErrors.userNameMaxLength = CONSTANTS.customValidationErrors.userNameMaxLength.message;

    this.formSubmitted = false;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.formSubmitted || this.signupForm.invalid) {
      return true;
    }
    return this.wfDialogService
      .confirm('Confirm Dialog', 'Discard changes?', this.viewContainerRef)
      .map(result => result);
  }

  join(event: Event): void {
    event.preventDefault();
    this.formSubmitted = true;
    let newUser = new WfUser(this.signupForm.value.userName, this.signupForm.value.password);
    this.wfAuthService.signUp(newUser)
      .then(result => this.router.navigate(['/home']))
      .catch(error => {
        this.formSubmitted = false;
        this.wfNotificationService.showError(error);
        this.signupForm.reset();
      });
  }

  get isUserNameInvalid(): boolean | null {
    if (_.isEmpty(this.signupForm)) {
      return null;
    }
    let control = this.signupForm.get('userName');
    return _.has(control.errors, this.validationErrors.userNameMaxLength.key);
  }

  get isPasswordInvalid(): boolean | null {
    if (_.isEmpty(this.signupForm)) {
      return null;
    }
    const passwordFormControl = this.signupForm.get('password');
    const confirmPasswordFormControl = this.signupForm.get('confirmPassword');
    return isPasswordMismatchError(passwordFormControl, confirmPasswordFormControl);
  }
}
