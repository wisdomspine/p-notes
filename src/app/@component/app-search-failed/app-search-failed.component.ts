import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-failed',
  templateUrl: './app-search-failed.component.html',
  styleUrls: ['./app-search-failed.component.scss'],
})
export class AppSearchFailedComponent implements OnInit {
  //this indicates that the search length is short
  @Input()
  short: boolean = false;

  //this indicates that no match was found
  @Input()
  empty: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
