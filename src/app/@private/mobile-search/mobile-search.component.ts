import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
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
    appMediaQueryService: AppMediaQueryService
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
}
