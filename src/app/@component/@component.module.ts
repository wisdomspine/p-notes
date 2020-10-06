import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppToolBarComponent } from './app-toolbar/app-toolbar.component';
import { AppUserToolbarCardComponent } from './app-user-toolbar-card/app-user-toolbar-card.component';
import { AppSearchInputFieldComponent } from './app-search-input-field/app-search-input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMenuItemComponent } from './app-menu-item/app-menu-item.component';
import { RouterModule } from '@angular/router';
import { AppNewObjectComponent } from './app-new-object/app-new-object.component';
import { AppMobileToolbarComponent } from './app-mobile-toolbar/app-mobile-toolbar.component';
import { AppUserSummaryComponent } from './app-user-summary/app-user-summary.component';

@NgModule({
  declarations: [
    AppSidenavComponent,
    AppToolBarComponent,
    AppUserToolbarCardComponent,
    AppSearchInputFieldComponent,
    AppMenuItemComponent,
    AppNewObjectComponent,
    AppMobileToolbarComponent,
    AppUserSummaryComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    AppSidenavComponent,
    AppToolBarComponent,
    AppUserToolbarCardComponent,
    AppSearchInputFieldComponent,
    AppMenuItemComponent,
    AppNewObjectComponent,
    AppMobileToolbarComponent,
    AppUserSummaryComponent,
  ],
})
export class ComponentModule {}
