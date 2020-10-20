import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { FormService } from 'src/app/@core/provider/form.service';
import { EditNoteInput } from 'src/types';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  notebooks: Notebook[] = [];
  form: FormGroup;
  title: String = "Update Note details";
  compareWith = Note.compareWith;
  constructor(
    private dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditNoteInput,
    formService: FormService,
  ) { 
    if(!data.note){
      data.note = {};
      this.title = "New Note";
    }
    this.form = formService.generateNoteForm(data.note);
    console.log(data);
    data.notebooks && data.notebooks.subscribe(books => {
      
      
      this.notebooks = books;
    });
  }

  close(){
    this.dialogRef.close(null)
    this.notebooks[0].name
  }

  submit(){
    this.dialogRef.close(this.form.value);
  }

  ngOnInit(): void {
  }

  get image(): String{
    return this.data.note.cover;
  }

  handleFileCange(file: File) {
    if (!(file instanceof File) || !file) return;

    this.data.imageChangeHandler(file).subscribe((blob) => {
      this.form.setValue({ ...this.form.value, coverFile: blob });
      this.data.note = {
        ...this.data.note,
        cover: URL.createObjectURL(blob),
      };
    });

  }

  control(key: String): AbstractControl {
    return this.form.get(`${key}`);
  }

}
