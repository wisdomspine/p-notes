import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { NoteService } from 'src/app/@core/provider/note.service';
import { NotebookService } from 'src/app/@core/provider/notebook.service';
import { NotesComponentRoute, NotesComponentRouteName } from 'src/app/route-names';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, OnDestroy {
  static routeName: string = NotesComponentRouteName;
  static route: String = NotesComponentRoute;
  

  public notebookId: String;
  private notebook: Notebook;
  private notesSubscription: Subscription;
  private notebookIdSubscription: Subscription;
  notes: Note[] = [];

  constructor(
    public noteService: NoteService,
    private notebookService: NotebookService,
    activeRoute: ActivatedRoute,
  ) {
    this.notebookIdSubscription = activeRoute.queryParamMap.subscribe(query => {
      this.notebookId = query.get("notebook");
      notebookService.notebook(this.notebookId).subscribe(book => {
        this.notebook = book;
      })
      if(this.notesSubscription) this.notesSubscription.unsubscribe();
      this.notesSubscription = noteService.notes({notebookId: `${this.notebookId || ''}` || null}).subscribe(notes => {
        this.notes = notes;
      });
    });

  }
  ngOnDestroy(): void {
    this.notesSubscription && this.notesSubscription.unsubscribe();
    this.notebookIdSubscription && this.notebookIdSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  get showActions(): boolean {   
    return Boolean(this.notebook);
  }

  get title(): String {
    return this.notebook && this.notebook.name || "Notes";
  }

  get canDeleteNotebook(): boolean {
    return true;
  }

  handleDelete(index: number) {
    this.noteService.delete(this.notes[index] && this.notes[index].id);
  }

  handleSettings(index: number){
    this.noteService.editNoteDetails(this.notes[index]);
  }

  printNote(index: number){
    this.noteService.print(this.notes[index]);
    
  }

  deleteNotebook(){
    this.notebookService.delete(this.notebookId);
  }

  editNotebook(){
    this.notebookService.editNotebookDetails(this.notebook);
  }

  notebookDetails(){
    this.notebookService.showDetails(this.notebook);
  }

  createNote(){
    this.noteService.addNote(this.notebook);
  }

  
}
