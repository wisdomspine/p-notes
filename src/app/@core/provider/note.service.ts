import { Injectable } from '@angular/core';
import { NotesComponent } from 'src/app/@private/notes/notes.component';
import { Note } from '../models/Note';
import { Notebook } from '../models/Notebook';
import { AppDialogService } from './app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private dialogService: AppDialogService,
  ) { }
  showDetails(note: Note | String) {
    this.dialogService
      .showNoteDetails(
        new Note({
          notebook: new Notebook({name: 'The agony of Tom Sawyer',}),
          title: 'Chapter 1',
          link: `/${NotesComponent.route}/`,
          cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
          description: 'The agony of Tom Sawyer',
          createdAt: 'Sep 5, 2020 11:15pm',
          updatedAt: 'Sep 6, 2020 11:15pm',
        })
      )
      .subscribe((e) => {
        // if (e) this.dialogService.editNote();
      });
  }
}
