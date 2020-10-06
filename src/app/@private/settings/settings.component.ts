import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  static routeName: string = 'settings';
  static route: String = `settings`;
  constructor() {}

  ngOnInit(): void {}
}
