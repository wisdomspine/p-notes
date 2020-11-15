import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';
import { AuthService } from 'src/app/@core/provider/auth.service';
import { ConductReviewService } from 'src/app/@core/provider/conduct-review.service';
import { AccountService } from 'src/app/@core/provider/account.service';
import { AppUser } from 'src/types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolBarComponent implements OnInit {
  public user: AppUser
  constructor(
    public appInfoService: AppInfoService,
    public menuStateService: AppMenuStateService,
    private conductReview: ConductReviewService,
    private editAccountService: AccountService,
    private authService: AuthService,
    accountService: AccountService,
  ) {
    accountService.currentAccount.subscribe(u => this.user= u);
  }

  ngOnInit(): void {
    
  }
  toggleMenu() {
    this.menuStateService.toogleState();
  }

  review() {
    this.conductReview.startReview();
  }

  account() {
    this.editAccountService.edit();
  }

  logout(){
    this.authService.logout();
  }
}
