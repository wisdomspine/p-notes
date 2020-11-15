import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';
import { Event } from '@angular/router';
import { SearchFieldOutput } from 'src/types';

@Component({
  selector: 'app-search-input-field',
  templateUrl: './app-search-input-field.component.html',
  styleUrls: ['./app-search-input-field.component.scss'],
})
export class AppSearchInputFieldComponent implements OnInit {
  control: FormControl = new FormControl();

  focused: boolean;

  @Input('search')
  set search(term) {
    this.control.setValue(term);
  }

  @Output('search')
  input: EventEmitter<SearchFieldOutput> = new EventEmitter<
    SearchFieldOutput
  >();

  // @Output('submit')
  // submitEvent: EventEmitter<String> = new EventEmitter<String>();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    // this.submitEvent.emit(this.control.value);
    this.handleInputChange();
  }

  // @Input()
  notes: boolean = true;

  // @Input()
  notebooks: boolean = true;

  _notesValue: String = 'notes';
  _notebooksValue: String = 'notebooks';

  // @Output('notes')
  // notesChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @Output('notebooks')
  // notebooksChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectionChange(event: MatSelectionListChange) {
    if (event.option.value === this._notebooksValue) {
      this.notebooks = event.option.selected;
      // this.notebooksChange.emit(this.notebooks);
    } else {
      this.notes = event.option.selected;
      // this.notesChange.emit(this.notebooks);
    }

    this.handleInputChange();
  }

  handleInputChange() {
    this.input.emit({
      search: this.control.value,
      notes: this.notes,
      notebooks: this.notebooks,
    });
  }
}
