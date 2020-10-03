import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isSmallScreen: Observable<boolean>;
  constructor(mediaQueryService: AppMediaQueryService) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
  }

  ngOnInit(): void {}
}
