import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppValidators } from '../validators/app-validators';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private formBuilder: FormBuilder) {}

  generateUsernameControl(initialValue: String = null): FormControl {
    return this.formBuilder.control(initialValue, [
      AppValidators.usernameValidator(),
    ]);
  }
}
