import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, CanDeactivate} from "@angular/router";
import * as _ from "lodash";
import {User} from "../../common/models/user.model";
import {equalPassword, isPasswordMismatchError} from "../../common/validators/equalPassword.validator";
import {constants} from "../../common/constants";
import {AuthService} from "../services/auth.service";
import {DialogService} from "../../core/dialog/services/dialog.service";
import {NotificationService} from "../../core/services/notification.service";
import {CanComponentDeactivate} from "../../common/services/can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'wf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {
  signupForm: FormGroup;
  formSubmitted: boolean;
  validationMessages = {
    passwordMismatch: '',
    userNameMaxLength: ''
  };
  userNameMaxLength: number = constants.userNameMaxLength;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private dialogService: DialogService,
              private notificationService: NotificationService,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.maxLength(this.userNameMaxLength)])],
      password: ['', Validators.compose([Validators.required, equalPassword('confirmPassword')])],
      confirmPassword: ['', Validators.compose([Validators.required, equalPassword('password')])]
    });

    this.validationMessages.passwordMismatch = constants.customValidationErrors.passwordMismatch.message;
    this.validationMessages.userNameMaxLength = constants.customValidationErrors.userNameMaxLength.message;

    this.formSubmitted = false;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.formSubmitted || this.signupForm.invalid) {
      return true;
    }
    return this.dialogService
      .confirm('Confirm Dialog', 'Discard changes?', this.viewContainerRef)
      .map(result => result);
  }

  join(event: Event): void {
    event.preventDefault();
    this.formSubmitted = true;
    let newUser = new User(this.signupForm.value.userName, this.signupForm.value.password);
    this.authService.signUp(newUser)
      .then(result => this.router.navigate(['/home']))
      .catch(error => {
        this.formSubmitted = false;
        this.notificationService.showError(error);
        this.signupForm.reset();
      });
  }

  get isUserNameInvalid(): boolean {
    if (_.isEmpty(this.signupForm)) {
      return null;
    }
    let control = this.signupForm.get('userName');
    return _.has(control.errors, constants.customValidationErrors.userNameMaxLength.key);
  }

  get isPasswordInvalid(): boolean {
    if (_.isEmpty(this.signupForm)) {
      return null;
    }
    const passwordFormControl = this.signupForm.get('password');
    const confirmPasswordFormControl = this.signupForm.get('confirmPassword');
    return isPasswordMismatchError(passwordFormControl, confirmPasswordFormControl);
  }
}
