import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-object',
  templateUrl: './app-new-object.component.html',
  styleUrls: ['./app-new-object.component.scss'],
})
export class AppNewObjectComponent implements OnInit {
  @Input()
  expanded: boolean = true;

  @Output()
  newNote: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  newNotebook: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
