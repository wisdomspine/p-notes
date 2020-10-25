import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FontFamily } from 'src/app/@core/models/FontFamily';
import { Settings } from 'src/app/@core/models/Settings';
import { AppMediaQueryService } from 'src/app/@core/provider/app-media-query.service';
import { FontFamilyService } from 'src/app/@core/provider/font-family.service';
import { SettingsService } from 'src/app/@core/provider/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  static routeName: string = 'settings';
  static route: String = `settings`;
  settings: Settings;

  private settingSubscription: Subscription;
  constructor(
    public mediaQueryService: AppMediaQueryService,
    public fontFamilyService: FontFamilyService,
    private settingsService: SettingsService,
  ) {
    this.settingSubscription = this.settingsService.settings.subscribe(s => {
      this.settings = s;
    })
  }
  ngOnDestroy(): void {
    this.settingSubscription.unsubscribe();
  }

  save(){
    this.settingsService.update(this.settings);
  }

  ngOnInit(): void {}
}
