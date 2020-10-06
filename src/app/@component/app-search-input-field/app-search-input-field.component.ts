import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  @Output()
  input: EventEmitter<String> = new EventEmitter();

  @Output('submit')
  submitEvent: EventEmitter<String> = new EventEmitter<String>();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.submitEvent.emit(this.control.value);
  }
}
