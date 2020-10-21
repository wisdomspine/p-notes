import { ScrollDispatcher } from '@angular/cdk/overlay';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent implements OnInit, AfterViewInit {

  scrollSubscription: Subscription;

  constructor(
    public appInfoService: AppInfoService,
  ) {
    
   }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  login(){

  }

  register(){

  }
}
