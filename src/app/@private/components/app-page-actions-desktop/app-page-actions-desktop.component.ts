import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-page-actions-desktop',
  templateUrl: './app-page-actions-desktop.component.html',
  styleUrls: ['./app-page-actions-desktop.component.scss'],
})
export class AppPageActionsDesktopComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  @Input('appPageActions')
  appPageActions: any;

  @Input()
  title: String = 'Notebooks';
}
