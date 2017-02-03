export class WfStorageKeys {
  readonly loggedUser = 'logged-user';
}

export const USER_NAME_MAX_LENGTH = 25;

export interface WfCustomValidationError {
  key: string;
  message: string
}

export class WfCustomValidationErrors {
  readonly userNameMaxLength: WfCustomValidationError = {
    key: 'maxlength',
    message: `Name cannot be more than ${USER_NAME_MAX_LENGTH} characters long.`
  };
  readonly passwordMismatch: WfCustomValidationError = {
    key: 'passwordMismatch',
    message: 'Password mismatch.'
  };
}

export class WfUnitsFormat {
  readonly Fahrenheit: 'imperial';
  readonly Celsius: 'metric';
}
