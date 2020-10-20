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

  static notebookName(): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      const value: String = control.value && `${control.value || ''}`.trim();

      const isValid: boolean = value != null && value.length >= 1;
      return isValid
        ? null
        : {
            notebookName: {
              value: value,
              error: "Notebook's name should not be empty",
            },
          };
    };
  }

  static noteTitle(): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      const value: String = control.value && `${control.value || ''}`.trim();

      const isValid: boolean = value != null && value.length >= 1;
      return isValid
        ? null
        : {
          noteTitle: {
              value: value,
              error: "Note's name should not be empty",
            },
          };
    };
  }  
}
