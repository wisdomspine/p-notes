import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';
import { AuthService } from 'src/app/@core/provider/auth.service';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss']
})
export class HomeMobileComponent implements OnInit {
  constructor(
    public appInfoService: AppInfoService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login();
  }

  register(){
    this.authService.register();
  }

}
