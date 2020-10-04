import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isSmallScreen: Observable<boolean>;
  menuState: Observable<boolean>;
  constructor(
    mediaQueryService: AppMediaQueryService,
    menuState: AppMenuStateService
  ) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
    this.menuState = menuState.onStateChange;
  }

  ngOnInit(): void {}
}
