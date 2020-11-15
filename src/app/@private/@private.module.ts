import { CommonModule } from '@angular/common';
import { Type, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ComponentModule } from '../@component/@component.module';

import { PrivateRoutingModule } from './@private-routing.module';
import { AppCoverImageComponent } from './components/app-cover-image/app-cover-image.component';
import { AppEditUserAvatarComponent } from './components/app-edit-user-avatar/app-edit-user-avatar.component';
import { AppMenuItemComponent } from './components/app-menu-item/app-menu-item.component';
import { AppMobileToolbarComponent } from './components/app-mobile-toolbar/app-mobile-toolbar.component';
import { AppNewObjectComponent } from './components/app-new-object/app-new-object.component';
import { AppPageActionsDesktopComponent } from './components/app-page-actions-desktop/app-page-actions-desktop.component';
import { AppPageActionsMobileComponent } from './components/app-page-actions-mobile/app-page-actions-mobile.component';
import { AppPageActionsComponent } from './components/app-page-actions/app-page-actions.component';
import { AppSearchFailedComponent } from './components/app-search-failed/app-search-failed.component';
import { AppSearchInputFieldComponent } from './components/app-search-input-field/app-search-input-field.component';
import { AppSearchResultListComponent } from './components/app-search-result-list/app-search-result-list.component';
import { AppSidenavComponent } from './components/app-sidenav/app-sidenav.component';
import { AppStarsRatingComponent } from './components/app-stars-rating/app-stars-rating.component';
import { AppTextEditorTitleComponent } from './components/app-text-editor-title/app-text-editor-title.component';
import { AppTextEditorComponent } from './components/app-text-editor/app-text-editor.component';
import { AppToolBarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppUserSummaryComponent } from './components/app-user-summary/app-user-summary.component';
import { AppUserToolbarCardComponent } from './components/app-user-toolbar-card/app-user-toolbar-card.component';
import { NoNotesInNotebookComponent } from './components/no-notes-in-notebook/no-notes-in-notebook.component';
import { NoteCardListComponent } from './components/note-card-list/note-card-list.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotebookCardListComponent } from './components/notebook-card-list/notebook-card-list.component';
import { NotebookCardComponent } from './components/notebook-card/notebook-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { NoteComponent } from './note/note.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { NotesComponent } from './notes/notes.component';
import { SettingsComponent } from './settings/settings.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { DeleteNoteDialogComponent } from './components/dialogs/delete-note-dialog/delete-note-dialog.component';
import { DeleteNotebookDialogComponent } from './components/dialogs/delete-notebook-dialog/delete-notebook-dialog.component';
import { EditAccountComponent } from './components/dialogs/edit-account/edit-account.component';
import { EditNoteComponent } from './components/dialogs/edit-note/edit-note.component';
import { EditNotebookComponent } from './components/dialogs/edit-notebook/edit-notebook.component';
import { ImageResizerComponent } from './components/dialogs/image-resizer/image-resizer.component';
import { LeaveAReviewComponent } from './components/dialogs/leave-areview/leave-areview.component';
import { NoteDetailsComponent } from './components/dialogs/note-details/note-details.component';
import { NotebookDetailsComponent } from './components/dialogs/notebook-details/notebook-details.component';
import { ReviewAppreciationComponent } from './components/dialogs/review-appreciation/review-appreciation.component';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCheckboxModule } from "@angular/material/checkbox";

const privateComponents:(any| Type<any>)[] = [
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
  AppSearchFailedComponent,
  DeleteNotebookDialogComponent,
  DeleteNoteDialogComponent,
  AppStarsRatingComponent,
  LeaveAReviewComponent,
  ReviewAppreciationComponent,
  EditAccountComponent,
  AppEditUserAvatarComponent,
  ImageResizerComponent,
  NotebookDetailsComponent,
  EditNotebookComponent,
  AppCoverImageComponent,
  NoteDetailsComponent,
  EditNoteComponent,
  NoNotesInNotebookComponent,
];


@NgModule({
  declarations: [
    DashboardComponent,
    NotebooksComponent,
    NotesComponent,
    SettingsComponent,
    NoteComponent,
    MobileSearchComponent,
    ...privateComponents,
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

    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    
    EditorModule,
    ImageCropperModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
  providers: [
    MatDialog,
  ]
})
export class PrivateModule {
  static route = '';
}
