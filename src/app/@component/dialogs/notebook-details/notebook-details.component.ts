import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notebook } from 'src/app/@core/models/Notebook';

@Component({
  selector: 'app-notebook-details',
  templateUrl: './notebook-details.component.html',
  styleUrls: ['./notebook-details.component.scss'],
})
export class NotebookDetailsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<NotebookDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public notebook: Notebook
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null);
  }

  edit() {
    //exit and notifies the caller that edit is clicked
    this.dialogRef.close(true);
  }
}
