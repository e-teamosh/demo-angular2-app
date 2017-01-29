import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import * as _ from "lodash";
import {User} from "../../common/models/user.model";
import {equalPassword, isPasswordMismatchError} from "../../common/validators/equalPassword.validator";
import {constants} from "../../common/constants";
import {AuthService} from "../services/auth.service";
import {NotificationService} from "../../core/services/notification.service";

@Component({
  moduleId: module.id,
  selector: 'wf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  validationMessages = {
    passwordMismatch: '',
    userNameMaxLength: ''
  };
  userNameMaxLength: number = constants.userNameMaxLength;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.maxLength(this.userNameMaxLength)])],
      password: ['', Validators.compose([Validators.required, equalPassword('confirmPassword')])],
      confirmPassword: ['', Validators.compose([Validators.required, equalPassword('password')])]
    });

    this.validationMessages.passwordMismatch = constants.customValidationErrors.passwordMismatch.message;
    this.validationMessages.userNameMaxLength = constants.customValidationErrors.userNameMaxLength.message;
  }

  join(event: Event): void {
    event.preventDefault();
    let newUser = new User(this.signupForm.value.userName, this.signupForm.value.password);
    this.authService.signUp(newUser)
      .then(result => this.router.navigate(['/home']))
      .catch(error => this.notificationService.showError(error));
  }

  get isUserNameInvalid() {
    if (_.isEmpty(this.signupForm)) {
      return null;
    }
    let control = this.signupForm.get('userName');
    return _.has(control.errors, constants.customValidationErrors.userNameMaxLength.key);
  }

  get isPasswordInvalid() {
    if (_.isEmpty(this.signupForm)) {
      return null;
    }
    const passwordFormControl = this.signupForm.get('password');
    const confirmPasswordFormControl = this.signupForm.get('confirmPassword');
    return isPasswordMismatchError(passwordFormControl, confirmPasswordFormControl);
  }
}
