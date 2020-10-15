import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppUser, EditAccountResult } from 'src/types';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
})
export class EditAccountComponent implements OnInit {
  result: EditAccountResult;
  blobUrl: String;

  constructor(
    private dialogRef: MatDialogRef<EditAccountComponent, EditAccountResult>,
    @Inject(MAT_DIALOG_DATA) data: AppUser
  ) {
    this.result = {
      user: data,
      blob: null,
    };
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null);
  }

  submit() {
    this.result;
  }

  get image(): String {
    return this.blobUrl || this.result.user.image;
  }
}
