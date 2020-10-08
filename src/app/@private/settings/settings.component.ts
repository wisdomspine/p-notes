import { Component, OnInit } from '@angular/core';
import { FontFamily } from 'src/app/@core/models/FontFamily';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { FontFamilyService } from 'src/app/@core/provider/font-family.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  static routeName: string = 'settings';
  static route: String = `settings`;
  userFont: FontFamily;
  constructor(
    public mediaQueryService: AppMediaQueryService,
    public fontFamilyService: FontFamilyService
  ) {
    this.userFont = fontFamilyService.default;
  }

  ngOnInit(): void {}
}
