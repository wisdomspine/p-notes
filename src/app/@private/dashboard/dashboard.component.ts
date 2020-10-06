import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';
import { MenuItemModel } from 'src/types';
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
  constructor(
    mediaQueryService: AppMediaQueryService,
    menuState: AppMenuStateService
  ) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
    this.menuState = menuState.onStateChange;
  }

  ngOnInit(): void {}
  startSearch(term: String = null) {
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
}
