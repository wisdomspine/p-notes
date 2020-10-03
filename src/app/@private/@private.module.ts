import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PrivateRoutingModule } from './@private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PrivateRoutingModule, MatSidenavModule],
})
export class PrivateModule {
  static route = '';
}
