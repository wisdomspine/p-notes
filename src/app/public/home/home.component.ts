import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { HomeComponentRoute, HomeComponentRouteName } from 'src/app/route-names';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isSmallScreen: Observable<boolean>;
  static routeName: String = HomeComponentRouteName;
  static route: String = HomeComponentRoute;
  constructor(
    mediaQueryService: AppMediaQueryService,
  ) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
   }
  ngOnDestroy(): void {
    document.querySelector("html").style.overflowY = null;
  }

  ngOnInit(): void {
    document.querySelector("html").style.overflowY = "auto";
  }

}
