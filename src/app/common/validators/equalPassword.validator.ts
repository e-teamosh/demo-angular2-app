import {ValidatorFn, AbstractControl} from "@angular/forms";
import * as _ from "lodash";
import {constants} from "../constants";

const ERROR_NAME = constants.customValidationErrors.passwordMismatch.key;

export function equalPassword(fieldName: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (_.isEmpty(control.parent)) {
      return;
    }

    let form = control.parent;
    let otherControl = form.get(fieldName);

    control.setErrors(null);
    otherControl.setErrors(null);

    return !_.isEmpty(control.value) && !_.isEmpty(otherControl.value) &&
    control.value === otherControl.value ? null : {[ERROR_NAME]: true};
  }
}

export function isPasswordMismatchError(passwordFormControl: AbstractControl, confirmPasswordFormControl: AbstractControl): boolean {
  let passwordMismatch = _.has(passwordFormControl.errors, ERROR_NAME) || _.has(confirmPasswordFormControl.errors, ERROR_NAME);
  return passwordMismatch && !_.isEmpty(passwordFormControl.value) && !_.isEmpty(confirmPasswordFormControl.value);
}
