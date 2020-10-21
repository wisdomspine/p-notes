import { Component, HostListener, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss']
})
export class HomeMobileComponent implements OnInit {
  constructor(
    public appInfoService: AppInfoService,
  ) { }

  ngOnInit(): void {
  }

  login(){

  }

  register(){

  }

}
