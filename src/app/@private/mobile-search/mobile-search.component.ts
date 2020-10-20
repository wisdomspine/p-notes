import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
export class MobileSearchComponent implements OnInit {
  static routeName: string = 'search';
  static route: String = `search`;
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

  ngOnInit(): void {}

  get results(): (Notebook | Note)[] {
    return this.searchService.search();
  }

  isSmallScreen: Observable<boolean>;
  menuState: Observable<boolean>;
  searching: boolean = false;
  search: SearchFieldOutput = null;

  startSearch(output: SearchFieldOutput) {
    this.search = output;

    this.searching = true;
  }

  stopSearch() {
    this.searching = false;
  }

  private deleteNotebook(notebook: Notebook) {
    this.dialogService.confirmNotebookDelete().subscribe(r =>{
      if(r && r.delete){
        // TODO: call notebook service delete method
      }
    });
  }


  private editNotebookDetails(notebook: Notebook){
    this.notebookService.editNotebookDetails(notebook);
  }

  private showNotebookDetails(notebook: Notebook){
    this.notebookService.showDetails(notebook);
  }

  

  private deleteNote(note: Note) {
    this.dialogService.confirmNoteDelete().subscribe(e => {
      if(e){
        // TODO:call note service delete method
      }
    });
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
