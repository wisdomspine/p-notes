import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/@core/models/Note';

@Component({
  selector: 'app-note-card-list',
  templateUrl: './note-card-list.component.html',
  styleUrls: ['./note-card-list.component.scss'],
})
export class NoteCardListComponent implements OnInit {
  @Input()
  notes: Note[] = [];

  /**
   * emit the index of note whose details button is clicked
   */
  @Output('details')
  detailsClicked: EventEmitter<number> = new EventEmitter<number>();

  /**
   * emit the index of note whose settings button is clicked
   */
  @Output('settings')
  settingsClicked: EventEmitter<number> = new EventEmitter<number>();

  /**
   * emit the index of note whose delete button is clicked
   */
  @Output('delete')
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output('print')
  onPrint: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  trackBy(index: number, note: Note): number {
    return note.key;
  }
}
