import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/@core/models/Note';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NoteDetailsComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public note: Note,
  ) { }

  ngOnInit(): void {
    // this.note.tt
  }

  close(){
    this.dialogRef.close(null);
  }

  edit(){
    //notifies the caller of tis dialog that the edit button was clicked
    this.dialogRef.close(true);
  }

}
