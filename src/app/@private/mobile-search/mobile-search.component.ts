import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss'],
})
export class MobileSearchComponent implements OnInit {
  static routeName: string = 'search';
  static route: String = `search`;
  constructor() {}

  ngOnInit(): void {}
}
