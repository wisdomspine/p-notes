import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-summary',
  templateUrl: './app-user-summary.component.html',
  styleUrls: ['./app-user-summary.component.scss'],
})
export class AppUserSummaryComponent implements OnInit {
  @Input()
  image: String;

  @Input()
  name: String;

  @Input()
  email: String;
  constructor() {}

  get initial(): String{
    return this.name && this.name.trim().substr(0, 1).toUpperCase() || '0';
  }

  ngOnInit(): void {}
}
