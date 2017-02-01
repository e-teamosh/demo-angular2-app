export class StorageKeys {
  readonly loggedUser = 'logged-user';
}

export const USER_NAME_MAX_LENGTH = 25;

export interface CustomValidationError {
  key: string;
  message: any
}

export class CustomValidationErrors {
  readonly userNameMaxLength: CustomValidationError = {
    key: 'maxlength',
    message: `Name cannot be more than ${USER_NAME_MAX_LENGTH} characters long.`
  };
  readonly passwordMismatch: CustomValidationError = {
    key: 'passwordMismatch',
    message: 'Password mismatch.'
  };
}

export class UnitsFormat {
  readonly Fahrenheit: 'imperial';
  readonly Celsius: 'metric';
}
