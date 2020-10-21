import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/@core/provider/app-info.service';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent implements OnInit {

  constructor(
    public appInfoService: AppInfoService,
  ) { }

  ngOnInit(): void {
  }

}
