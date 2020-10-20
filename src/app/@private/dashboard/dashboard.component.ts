import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';
import { NoteService } from 'src/app/@core/provider/note.service';
import { NotebookService } from 'src/app/@core/provider/notebook.service';
import { SearchService } from 'src/app/@core/provider/search.service';
import { MenuItemModel, SearchFieldOutput } from 'src/types';
import { MobileSearchComponent } from '../mobile-search/mobile-search.component';
import { NotebooksComponent } from '../notebooks/notebooks.component';
import { NotesComponent } from '../notes/notes.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isSmallScreen: Observable<boolean>;
  menuState: Observable<boolean>;
  searching: boolean = false;
  search: SearchFieldOutput = null;
  constructor(
    mediaQueryService: AppMediaQueryService,
    menuState: AppMenuStateService,
    private searchService: SearchService,
    private notebookService: NotebookService,
    private noteService: NoteService,
    private dialogService: AppDialogService,
  ) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
    this.menuState = menuState.onStateChange;
  }

  ngOnInit(): void {}
  startSearch(output: SearchFieldOutput) {
    // console.log(output);
    this.search = output;

    this.searching = true;
  }

  stopSearch() {
    this.searching = false;
  }

  menu: MenuItemModel[] = [
    { link: `${NotebooksComponent.route}/`, text: 'Notebooks', icon: 'book' },
    { link: `${NotesComponent.route}/`, text: 'Notes', icon: 'description' },
    { link: `${SettingsComponent.route}/`, text: 'Settings', icon: 'settings' },
  ];

  mobileMenu: MenuItemModel[] = [
    { link: `${NotebooksComponent.route}/`, text: 'Notebooks', icon: 'book' },
    { link: `${NotesComponent.route}/`, text: 'Notes', icon: 'description' },
    {
      link: `${MobileSearchComponent.route}/`,
      text: 'Search',
      icon: 'search',
    },
    { link: `${SettingsComponent.route}/`, text: 'Settings', icon: 'settings' },
  ];

  get searchResults(): (Note | Notebook)[] {
    return this.searchService.search();
  }

  newNotebook() {
    this.notebookService.addNotebook();
  }

  newNote() {
    this.noteService.addNote();
  }


  /**
   * Handle search operations
   */

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
    const result = this.searchResults[index];
    if(result instanceof Notebook){
      this.showNotebookDetails(result)
    }else{
      this.showNoteDetails(result);
    }
  }

  handleSettings(index: number){
    const result = this.searchResults[index];
    if(result instanceof Notebook){
      this.editNotebookDetails(result)
    }else{
      this.editNoteDetails(result);
    }
  }

  handleDelete(index: number){
    const result = this.searchResults[index];
    if(result instanceof Notebook){
      this.deleteNotebook(result)
    }else{
      this.deleteNote(result);
    }
  }

  handlePrint(index: number){
    const result = this.searchResults[index];
    this.printNote(result);
  }

  // Ended search operations

}
