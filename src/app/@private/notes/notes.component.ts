import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class NotesComponent implements OnInit {
  static routeName: string = NotesComponentRouteName;
  static route: String = NotesComponentRoute;
  

  public notebookId: String;
  private notebook: Notebook;

  constructor(
    private dialogService: AppDialogService,
    public noteService: NoteService,
    private notebookService: NotebookService,
    activeRoute: ActivatedRoute,
  ) {
    this.notebookId = activeRoute.snapshot.queryParamMap.get("notebook");
  }

  ngOnInit(): void {}

  get notes(): Note[] {
    return Array(100)
      .fill(
        new Note({
          id: 'guy',
          key: 24,
          createdAt: '',
          updatedAt: '',
          link: `/${NotesComponentRoute}/guy`,
          notebook: new Notebook({}),
          title: 'Chapter 1',
          characters: 0,
          words: 0,
          description: '',
          cover:
            'https://images.unsplash.com/photo-1585108592681-d0db82bab204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        })
      )
      .map(function (n, i) {
        n.key = i;
        n.id = `${i}`;
        return n;
      });
  }

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
    this.dialogService.confirmNoteDelete().subscribe(e => {
      if(e){
        // TODO:call note service delete method
      }
    });
  }

  handleSettings(index: number){
    this.noteService.editNoteDetails(this.notes[index]);
  }

  printNote(index: number){
    this.noteService.print(this.notes[index]);
    
  }

  deleteNotebook(){
    this.dialogService.confirmNotebookDelete().subscribe(r => {
      if(r && r.delete){
        // TODO:call notebook service delete method
        
      }
    })
  }

  editNotebook(){
    this.notebookService.editNotebookDetails(this.notebook);
  }

  notebookDetails(){
    this.notebookService.showDetails(this.notebook);
  }

  
}
