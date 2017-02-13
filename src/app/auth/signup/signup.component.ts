import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, CanDeactivate} from "@angular/router";
import * as _ from "lodash";
import {WfUser} from "../../common/models/user/user.model";
import {equalPassword, isPasswordMismatchError} from "../../common/validators/equalPassword.validator";
import {USER_NAME_MAX_LENGTH, WfCustomValidationErrors} from "../../common/constants";
import {WfAuthService} from "../services/auth.service";
import {WfDialogService} from "../../core/dialog/services/dialog.service";
import {WfNotificationService} from "../../core/services/notification.service";
import {CanComponentDeactivate} from "../../common/services/can-deactivate-guard.service";
import {Observable} from "rxjs";
import {SPINNER, WfSpinnerService} from "../../common/spinner-controls/services/spinner.service";

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
  spinnerIndex = SPINNER.SIGNUP;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private wfAuthService: WfAuthService,
              private wfDialogService: WfDialogService,
              private wfNotificationService: WfNotificationService,
              private viewContainerRef: ViewContainerRef,
              private wfSpinnerService: WfSpinnerService) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.maxLength(USER_NAME_MAX_LENGTH)])],
      password: ['', Validators.compose([Validators.required, equalPassword('confirmPassword')])],
      confirmPassword: ['', Validators.compose([Validators.required, equalPassword('password')])]
    });
    this.validationErrors = new WfCustomValidationErrors();
    this.formSubmitted = false;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.formSubmitted || this.signupForm.invalid) {
      return true;
    }
    return this.wfDialogService
      .confirm('Confirmation', 'Discard changes?', this.viewContainerRef)
      .map(result => result);
  }

  join(event: Event): void {
    event.preventDefault();
    this.wfSpinnerService.showSpinner(this.spinnerIndex);
    this.formSubmitted = true;
    let newUser = new WfUser(this.signupForm.value.userName, this.signupForm.value.password);
    this.wfAuthService.signUp(newUser)
      .then(result => {
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
        this.router.navigate(['/home'])
      })
      .catch(error => {
        this.formSubmitted = false;
        this.wfNotificationService.showError(error);
        this.signupForm.reset();
        this.wfSpinnerService.hideSpinner(this.spinnerIndex);
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
