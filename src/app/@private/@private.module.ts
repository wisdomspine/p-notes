import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { PrivateRoutingModule } from './@private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentModule } from '../@component/@component.module';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { NotesComponent } from './notes/notes.component';
import { SettingsComponent } from './settings/settings.component';
import { NoteComponent } from './note/note.component';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    DashboardComponent,
    NotebooksComponent,
    NotesComponent,
    SettingsComponent,
    NoteComponent,
    MobileSearchComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    ComponentModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
})
export class PrivateModule {
  static route = '';
}
