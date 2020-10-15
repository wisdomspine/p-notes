import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DeleteNotebookDialogResult } from 'src/types';

@Component({
  selector: 'app-delete-notebook-dialog',
  templateUrl: './delete-notebook-dialog.component.html',
  styleUrls: ['./delete-notebook-dialog.component.scss'],
})
export class DeleteNotebookDialogComponent implements OnInit {
  result: DeleteNotebookDialogResult = {
    delete: true,
    deleteNotes: false,
  };

  constructor(
    public dialogRef: MatDialogRef<
      DeleteNotebookDialogComponent,
      DeleteNotebookDialogResult
    >
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null); //no result submitted
  }

  submit() {
    this.dialogRef.close(this.result);
  }
}
