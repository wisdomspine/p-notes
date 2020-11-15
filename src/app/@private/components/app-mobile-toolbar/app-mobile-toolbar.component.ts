import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/provider/auth.service';
import { ConductReviewService } from 'src/app/@core/provider/conduct-review.service';
import { AccountService } from 'src/app/@core/provider/account.service';
import { MenuItemModel } from 'src/types';

@Component({
  selector: 'app-mobile-toolbar',
  templateUrl: './app-mobile-toolbar.component.html',
  styleUrls: ['./app-mobile-toolbar.component.scss'],
})
export class AppMobileToolbarComponent implements OnInit {
  constructor(
    private conductReview: ConductReviewService,
    private editAccountService: AccountService,
    private authService: AuthService,
  ) {}
  @Input()
  menu: MenuItemModel[] = [];
  ngOnInit(): void {}

  expandMore(event) {
    event.stopImmediatePropagation();
  }

  logout(){
    this.authService.logout();
  }

  review() {
    this.conductReview.startReview();
  }

  account() {
    this.editAccountService.edit();
  }
}
