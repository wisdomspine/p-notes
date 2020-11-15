import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-toolbar-card',
  templateUrl: './app-user-toolbar-card.component.html',
  styleUrls: ['./app-user-toolbar-card.component.scss'],
})
export class AppUserToolbarCardComponent implements OnInit {
  @Input()
  image: String;

  @Input()
  name: String;

  @Input()
  email: String;

  @Output()
  account: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  review: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  logout: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
