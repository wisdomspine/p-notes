import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notebook } from 'src/app/@core/models/Notebook';
import { FormService } from 'src/app/@core/provider/form.service';
import { EditNotebookInput } from 'src/types';

@Component({
  selector: 'app-edit-notebook',
  templateUrl: './edit-notebook.component.html',
  styleUrls: ['./edit-notebook.component.scss'],
})
export class EditNotebookComponent implements OnInit {
  form: FormGroup;
  title: String = 'Update Notebook';
  constructor(
    private dialogRef: MatDialogRef<EditNotebookComponent, Notebook>,
    @Inject(MAT_DIALOG_DATA) public data: EditNotebookInput,
    formService: FormService
  ) {
    if (!data.notebook) {
      data.notebook = new Notebook({});
      this.title = 'Add Notebook';
    }

    this.form = formService.generateNotebookForm(data.notebook);
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null);
  }

  submit() {
    this.dialogRef.close({ ...this.data.notebook, ...this.form.value });
  }

  get image(): String {
    return this.data.notebook.cover;
  }

  handleFileCange(file: File) {
    if (!(file instanceof File) || !file) return;

    // return;

    this.data.imageChangeHandler(file).subscribe((blob) => {
      this.form.setValue({ ...this.form.value, coverFile: blob });
      this.data.notebook = new Notebook({
        ...this.data.notebook,
        cover: URL.createObjectURL(blob),
      });
    });
  }

  control(key: String): AbstractControl {
    return this.form.get(`${key}`);
  }
}
