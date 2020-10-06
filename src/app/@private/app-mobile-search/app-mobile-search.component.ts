import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-mobile-search',
  templateUrl: './app-mobile-search.component.html',
  styleUrls: ['./app-mobile-search.component.scss'],
})
export class AppMobileSearchComponent implements OnInit {
  static routeName: string = 'search';
  static route: String = `search`;
  constructor() {}

  ngOnInit(): void {}
}
