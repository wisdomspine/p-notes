import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { NoteService } from 'src/app/@core/provider/note.service';
import { NotebookService } from 'src/app/@core/provider/notebook.service';
import { SearchService } from 'src/app/@core/provider/search.service';
import { SearchFieldOutput } from 'src/types';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss'],
})
export class MobileSearchComponent implements OnInit, OnDestroy {
  static routeName: string = 'search';
  static route: String = `search`;

  private searchSubscription: Subscription;
  results: (Notebook | Note)[] = [];
  constructor(
    private searchService: SearchService,
    router: Router,
    appMediaQueryService: AppMediaQueryService,
    private dialogService: AppDialogService,
    private notebookService: NotebookService,
    private noteService: NoteService,
    
  ) {
    appMediaQueryService.isSmallScreen.subscribe((e) => {
      if (!e) {
        //mobile search component can only be accessed on small screens
        router.navigateByUrl('/');
      }
    });
  }
  ngOnDestroy(): void {
    this.searchSubscription && this.searchSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  private _processSearch(){
    if(this.searchSubscription) this.searchSubscription.unsubscribe();
    this.searchSubscription =  this.searchService.search({
      search: `${this.search.search ||''}`, 
      notebooks: this.search.notebooks, 
      notes: this.search.notes,
    }).subscribe(results => {
      this.results = results;
    });
  }

  isSmallScreen: Observable<boolean>;
  menuState: Observable<boolean>;
  searching: boolean = false;
  search: SearchFieldOutput = {};

  startSearch(output: SearchFieldOutput) {
    this.search = output || {};
    
    this.searching = true;
    this._processSearch();
  }

  stopSearch() {
    this.search = {};
    this.searching = false;
  }

  private deleteNotebook(notebook: Notebook) {
    this.notebookService.delete(notebook.id);
  }


  private editNotebookDetails(notebook: Notebook){
    this.notebookService.editNotebookDetails(notebook);
  }

  private showNotebookDetails(notebook: Notebook){
    this.notebookService.showDetails(notebook);
  }

  

  private deleteNote(note: Note) {
    this.noteService.delete(note.id);
  }

  private editNoteDetails(note: Note){
    this.noteService.editNoteDetails(note);
  }

  private printNote(note: Note){
    // TODO: call note service print method
  }

  showNoteDetails(note: Note){
    this.noteService.showDetails(note);
  }

  handleDetails(index: number){
    const result = this.results[index];
    if(result instanceof Notebook){
      this.showNotebookDetails(result)
    }else{
      this.showNoteDetails(result);
    }
  }

  handleSettings(index: number){
    const result = this.results[index];
    if(result instanceof Notebook){
      this.editNotebookDetails(result)
    }else{
      this.editNoteDetails(result);
    }
  }

  handleDelete(index: number){
    const result = this.results[index];
    if(result instanceof Notebook){
      this.deleteNotebook(result)
    }else{
      this.deleteNote(result);
    }
  }

  handlePrint(index: number){
    const result = this.results[index];
    this.printNote(result);
  }

}
