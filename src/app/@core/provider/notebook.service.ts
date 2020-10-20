import { Injectable } from '@angular/core';
import { NotesComponent } from 'src/app/@private/notes/notes.component';
import { NotesComponentRoute } from 'src/app/route-names';
import { Notebook } from '../models/Notebook';
import { AppDialogService } from './app-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  constructor(private dialogService: AppDialogService) {}

  //show a  notebook details
  showDetails(notebook: Notebook | String) {
    this.dialogService
      .showNotebookDetails(
        new Notebook({
          name: 'The agony of Tom Sawyer',
          link: `/${NotesComponentRoute}/`,
          cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
          description: 'The agony of Tom Sawyer',
          notesCount: 20,
          createdAt: 'Sep 5, 2020 11:15pm',
          updatedAt: 'Sep 6, 2020 11:15pm',
        })
      )
      .subscribe((e) => {
        if (e) this.editNotebookDetails(notebook);
      });
  }

  addNotebook() {
    this.dialogService.editNotebook().subscribe(console.log);
  }

  editNotebookDetails(notebook: Notebook | String){
    this.dialogService.editNotebook(notebook as Notebook);
  }
}
