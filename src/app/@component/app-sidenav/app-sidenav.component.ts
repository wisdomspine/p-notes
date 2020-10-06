import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/types';

@Component({
  selector: 'app-sidenav',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss'],
})
export class AppSidenavComponent implements OnInit {
  @Input()
  menu: MenuItemModel[] = [];

  @Input()
  expanded: boolean = false;

  constructor() {}
  ngOnInit(): void {}
}
