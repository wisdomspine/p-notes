import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './app-search-result-list.component.html',
  styleUrls: ['./app-search-result-list.component.scss'],
})
export class AppSearchResultListComponent implements OnInit {
  /**
   * emit the index of note/notebook whose details button is clicked
   */
  @Output('details')
  detailsClicked: EventEmitter<number> = new EventEmitter<number>();

  /**
   * emit the index of note/notebook whose settings button is clicked
   */
  @Output('settings')
  settingsClicked: EventEmitter<number> = new EventEmitter<number>();

  /**
   * emit the index of note/notebook whose delete button is clicked
   */
  @Output('delete')
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output('print')
  onPrint: EventEmitter<number> = new EventEmitter<number>();

  @Input('results')
  results: (Notebook | Note)[] = [];

  constructor() {}

  ngOnInit(): void {}

  isNote(result: Notebook | Note): boolean {
    return result instanceof Note;
  }

  trackBy(index: number, result: Notebook | Note): number {
    return result.key;
  }
}
