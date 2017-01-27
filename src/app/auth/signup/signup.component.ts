import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {equalPassword, isPasswordMismatchError} from "../../common/validators/equalPassword.validator";
import {constants} from "../../common/constants";

@Component({
  moduleId: module.id,
  selector: 'wf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  validationMessages = {
    passwordMismatch: ''
  };
  isPasswordMismatchError: boolean = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, equalPassword('confirmPassword')])],
      confirmPassword: ['', Validators.compose([Validators.required, equalPassword('password')])]
    });

    this.signupForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.validationMessages.passwordMismatch = constants.customValidationErrors.passwordMismatch.message;
  }

  join(event: Event): void {
    event.preventDefault();

    this.router.navigate(['/home']);
  }

  private onValueChanged(data?: any): void {
    if (!this.signupForm) {
      return;
    }
    const passwordFormControl = this.signupForm.get('password');
    const confirmPasswordFormControl = this.signupForm.get('confirmPassword');
    this.isPasswordMismatchError = isPasswordMismatchError(passwordFormControl, confirmPasswordFormControl);
  }
}
