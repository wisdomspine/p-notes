import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';
import { AuthService } from 'src/app/@core/provider/auth.service';
import { ConductReviewService } from 'src/app/@core/provider/conduct-review.service';
import { EditAccountService } from 'src/app/@core/provider/edit-account.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolBarComponent implements OnInit {
  constructor(
    public appInfoService: AppInfoService,
    public menuStateService: AppMenuStateService,
    private conductReview: ConductReviewService,
    private editAccountService: EditAccountService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}
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
