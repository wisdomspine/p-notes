import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-note-dialog',
  templateUrl: './delete-note-dialog.component.html',
  styleUrls: ['./delete-note-dialog.component.scss'],
})
export class DeleteNoteDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeleteNoteDialogComponent, boolean>
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null);
  }

  submit() {
    this.dialogRef.close(true);
  }
}
