import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { FormService } from 'src/app/@core/provider/form.service';
import { AppUser, EditAccountInput, EditAccountResult } from 'src/types';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
})
export class EditAccountComponent implements OnInit {
  result: EditAccountResult;
  blobUrl: String;

  control: FormControl;

  constructor(
    private dialogRef: MatDialogRef<EditAccountComponent, EditAccountResult>,
    @Inject(MAT_DIALOG_DATA) private data: EditAccountInput,
    formService: FormService
  ) {
    this.result = {
      user: data.account,
      blob: null,
    };

    this.control = formService.generateUsernameControl(this.result.user.name);
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null);
  }

  submit() {
    this.dialogRef.close({
      ...this.result,
      user: { ...this.result.user, name: this.control.value },
    });
  }

  get image(): String {
    return this.blobUrl || this.result.user.image;
  }

  handleFileCange(file: File) {
    if (!(file instanceof File) || !file) return;

    // return;

    this.data.imageChangeHandler(file).subscribe((blob) => {
      this.result = {
        ...this.result,
        blob: blob,
        user: { ...this.result.user, image: URL.createObjectURL(blob) },
      };
    });
  }
}
