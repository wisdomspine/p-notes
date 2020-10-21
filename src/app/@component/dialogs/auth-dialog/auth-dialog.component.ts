import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthDialogInput, AuthDialogOutput } from 'src/types';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent, AuthDialogOutput>,
    @Inject(MAT_DIALOG_DATA) public input: AuthDialogInput,
  ) { }

  ngOnInit(): void {
  }

  twitter(){
    this.dialogRef.close({
      twitter: true
    })
  }

  google(){
    this.dialogRef.close({
      google: true
    })
  }

  close(){
    this.dialogRef.close(null);
  }

}
