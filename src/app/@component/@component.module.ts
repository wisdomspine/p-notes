import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppToolBarComponent } from './app-toolbar/app-toolbar.component';

@NgModule({
  declarations: [AppSidenavComponent, AppToolBarComponent],
  imports: [CommonModule],
  exports: [AppSidenavComponent, AppToolBarComponent],
})
export class ComponentModule {}
