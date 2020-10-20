import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { NotesComponentRoute } from 'src/app/route-names';
import { Note } from '../models/Note';
import { Notebook } from '../models/Notebook';
import { AppDialogService } from './app-dialog.service';
import { PrintService } from './print.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private dialogService: AppDialogService,
    private printer: PrintService,
  ) { }
  showDetails(note: Note | String) {
    this.dialogService
      .showNoteDetails(
        new Note({
          notebook: new Notebook({name: 'The agony of Tom Sawyer', id: "30"}),
          title: 'Chapter 1',
          link: `/${NotesComponentRoute}/`,
          cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
          description: 'The agony of Tom Sawyer',
          createdAt: 'Sep 5, 2020 11:15pm',
          updatedAt: 'Sep 6, 2020 11:15pm',
        })
      )
      .subscribe((e) => {
        if (e) this.editNoteDetails(note);
      });
  }

  addNote() {
    this.dialogService.editNote(
      {note: new Note({
          notebook: new Notebook({name: 'The agony of Tom Sawyer', id: "30"}),
          title: 'Chapter 1',
          link: `/${NotesComponentRoute}/`,
          cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
          description: 'The agony of Tom Sawyer',
          createdAt: 'Sep 5, 2020 11:15pm',
          updatedAt: 'Sep 6, 2020 11:15pm',
        }),
        notebooks: of([
          new Notebook({name: 'The agony of Tom Sawyer 30', id: "30"}),
          new Notebook({name: 'The agony of Tom Sawyer 40', id: "40"}),
          new Notebook({name: 'The agony of Tom Sawyer 50', id: "50"}),
        ])
      }).subscribe(console.log);
  }

  editNoteDetails(note: Note | String){
    this.dialogService.editNote({
      note: note as Note,
      notebooks: of([
        new Notebook({name: 'The agony of Tom Sawyer 30', id: "30"}),
        new Notebook({name: 'The agony of Tom Sawyer 40', id: "40"}),
        new Notebook({name: 'The agony of Tom Sawyer 50', id: "50"}),
      ])
    });
  }  

  print(note: Note){
    this.printer.print(note);
  }
}
