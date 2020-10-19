import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Notebook } from '../models/Notebook';
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

  generateNotebookForm(notebook: Notebook): FormGroup {
    notebook = notebook || { name: null, coverFile: null, description: null };
    return this.formBuilder.group({
      name: [notebook.name, [AppValidators.notebookName()]],
      coverFile: notebook.coverFile,
      description: notebook.description,
    });
  }
}
