import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
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
    private router: Router,
  ) {
    this.isSmallScreen = mediaQueryService.isSmallScreen;
    this.router.events.pipe(filter(e => e instanceof NavigationStart || e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError)).subscribe(e => {
      if(e instanceof NavigationStart){
        document.body.classList.add("loading");
      }else{
        document.body.classList.remove("loading");
      }
    });
   }
  ngOnDestroy(): void {
    document.body.classList.remove("loading");
    document.querySelector("html").style.overflowY = null;
    document.body.classList.remove("home");
  }

  ngOnInit(): void {
    document.querySelector("html").style.overflowY = "auto";
    document.body.classList.add("home");
  }

}
