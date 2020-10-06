import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/types';

@Component({
  selector: 'app-mobile-toolbar',
  templateUrl: './app-mobile-toolbar.component.html',
  styleUrls: ['./app-mobile-toolbar.component.scss'],
})
export class AppMobileToolbarComponent implements OnInit {
  constructor() {}
  @Input()
  menu: MenuItemModel[] = [];
  ngOnInit(): void {}

  expandMore(event) {
    console.log(event);
    event.stopImmediatePropagation();
  }

  logout() {}

  review() {}

  account() {}
}
