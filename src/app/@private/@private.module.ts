import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { PrivateRoutingModule } from './@private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentModule } from '../@component/@component.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    ComponentModule,
    MatButtonModule,
  ],
})
export class PrivateModule {
  static route = '';
}
