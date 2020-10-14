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
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppToolBarComponent } from './app-toolbar/app-toolbar.component';
import { AppUserToolbarCardComponent } from './app-user-toolbar-card/app-user-toolbar-card.component';
import { AppSearchInputFieldComponent } from './app-search-input-field/app-search-input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMenuItemComponent } from './app-menu-item/app-menu-item.component';
import { RouterModule } from '@angular/router';
import { AppNewObjectComponent } from './app-new-object/app-new-object.component';
import { AppMobileToolbarComponent } from './app-mobile-toolbar/app-mobile-toolbar.component';
import { AppUserSummaryComponent } from './app-user-summary/app-user-summary.component';
import { AppPageActionsComponent } from './app-page-actions/app-page-actions.component';
import { AppPageActionsMobileComponent } from './app-page-actions-mobile/app-page-actions-mobile.component';
import { AppPageActionsDesktopComponent } from './app-page-actions-desktop/app-page-actions-desktop.component';
import { NotebookCardComponent } from './notebook-card/notebook-card.component';
import { NotebookCardListComponent } from './notebook-card-list/notebook-card-list.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteCardListComponent } from './note-card-list/note-card-list.component';
import { AppTextEditorComponent } from './app-text-editor/app-text-editor.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppTextEditorTitleComponent } from './app-text-editor-title/app-text-editor-title.component';
import { AppSearchResultListComponent } from './app-search-result-list/app-search-result-list.component';

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
    AppPageActionsComponent,
    AppPageActionsMobileComponent,
    AppPageActionsDesktopComponent,
    NotebookCardComponent,
    NotebookCardListComponent,
    NoteCardComponent,
    NoteCardListComponent,
    AppTextEditorComponent,
    AppTextEditorTitleComponent,
    AppSearchResultListComponent,
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
    MatTooltipModule,
    EditorModule,
    FormsModule,
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
    AppPageActionsComponent,
    AppPageActionsMobileComponent,
    AppPageActionsDesktopComponent,
    NotebookCardComponent,
    NotebookCardListComponent,
    NoteCardComponent,
    NoteCardListComponent,
    AppTextEditorComponent,
    AppSearchResultListComponent,
  ],
})
export class ComponentModule {}
