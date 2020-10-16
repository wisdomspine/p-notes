import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
  static usernameValidator(): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      const value: String = control.value;

      const isValid: boolean = value != null && value.length >= 2;

      return isValid
        ? null
        : {
            username: {
              value: value,
              error: 'username must contain at least 2 characters',
            },
          };
    };
  }
}
