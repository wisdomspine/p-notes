import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';
import { AppMenuStateService } from 'src/app/@core/provider/app-menu-state.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolBarComponent implements OnInit {
  constructor(
    public appInfoService: AppInfoService,
    public menuStateService: AppMenuStateService
  ) {}

  ngOnInit(): void {}
  toggleMenu() {
    this.menuStateService.toogleState();
  }
}
