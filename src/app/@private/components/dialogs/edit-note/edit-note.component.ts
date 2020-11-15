import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { FormService } from 'src/app/@core/provider/form.service';
import { EditNoteInput } from 'src/types';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit, OnDestroy {
  notebooks: Notebook[] = [];
  form: FormGroup;
  title: String = "Update Note details";
  notebook: Notebook ;
  compareWith = Note.compareWith;
  private notebooksSubscription: Subscription;
  constructor(
    private dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditNoteInput,
    formService: FormService,
  ) { 
    if(!data.note){
      data.note = new Note({});
      this.title = "New Note";
    }
    this.notebook = data.notebook;
    if(this.notebook) data.note = new Note({...data.note, notebook: this.notebook});
    this.form = formService.generateNoteForm(data.note);
    if(data.notebooks && !this.notebook) this.notebooksSubscription = data.notebooks.subscribe(books => {
      
      
      this.notebooks = books;
    });
  }
  ngOnDestroy(): void {
    this.notebooksSubscription && this.notebooksSubscription.unsubscribe();
  }

  close(){
    this.dialogRef.close(null)
  }

  submit(){
    this.dialogRef.close({...this.data.note, ...this.form.value});
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
      this.data.note = new Note({
        ...this.data.note,
        cover: URL.createObjectURL(blob),
      });
    });

  }

  control(key: String): AbstractControl {
    return this.form.get(`${key}`);
  }

}
