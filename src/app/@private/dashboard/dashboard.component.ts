import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';
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
    private searchService: SearchService
  ) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
    this.menuState = menuState.onStateChange;
  }

  ngOnInit(): void {}
  startSearch(output: SearchFieldOutput) {
    console.log(output);
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
}
