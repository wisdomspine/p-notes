import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthDialogComponent } from './dialogs/auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [
    AuthDialogComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatTooltipModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  exports: [
    AuthDialogComponent,
  ],
})
export class ComponentModule {}
