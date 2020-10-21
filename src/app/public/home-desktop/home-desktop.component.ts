import { ScrollDispatcher } from '@angular/cdk/overlay';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';
import { AuthService } from 'src/app/@core/provider/auth.service';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent implements OnInit, AfterViewInit {

  scrollSubscription: Subscription;

  constructor(
    public appInfoService: AppInfoService,
    private authService: AuthService,
  ) {
    
   }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.login();
  }

  register(){
    this.authService.register();
  }
}
