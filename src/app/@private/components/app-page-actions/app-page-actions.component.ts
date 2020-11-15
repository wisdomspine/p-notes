import { Component, Input, OnInit } from '@angular/core';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';

@Component({
  selector: 'app-page-actions',
  templateUrl: './app-page-actions.component.html',
  styleUrls: ['./app-page-actions.component.scss'],
})
export class AppPageActionsComponent implements OnInit {
  @Input('appPageActions')
  appPageActions: any = true;

  @Input()
  title: String;
  constructor(public mediaQueryService: AppMediaQueryService) {}

  ngOnInit(): void {}
}
