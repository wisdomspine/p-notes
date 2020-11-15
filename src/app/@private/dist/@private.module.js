"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PrivateModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var snack_bar_1 = require("@angular/material/snack-bar");
var toolbar_1 = require("@angular/material/toolbar");
var tinymce_angular_1 = require("@tinymce/tinymce-angular");
var ngx_image_cropper_1 = require("ngx-image-cropper");
var _component_module_1 = require("../@component/@component.module");
var _private_routing_module_1 = require("./@private-routing.module");
var app_cover_image_component_1 = require("./components/app-cover-image/app-cover-image.component");
var app_edit_user_avatar_component_1 = require("./components/app-edit-user-avatar/app-edit-user-avatar.component");
var app_menu_item_component_1 = require("./components/app-menu-item/app-menu-item.component");
var app_mobile_toolbar_component_1 = require("./components/app-mobile-toolbar/app-mobile-toolbar.component");
var app_new_object_component_1 = require("./components/app-new-object/app-new-object.component");
var app_page_actions_desktop_component_1 = require("./components/app-page-actions-desktop/app-page-actions-desktop.component");
var app_page_actions_mobile_component_1 = require("./components/app-page-actions-mobile/app-page-actions-mobile.component");
var app_page_actions_component_1 = require("./components/app-page-actions/app-page-actions.component");
var app_search_failed_component_1 = require("./components/app-search-failed/app-search-failed.component");
var app_search_input_field_component_1 = require("./components/app-search-input-field/app-search-input-field.component");
var app_search_result_list_component_1 = require("./components/app-search-result-list/app-search-result-list.component");
var app_sidenav_component_1 = require("./components/app-sidenav/app-sidenav.component");
var app_stars_rating_component_1 = require("./components/app-stars-rating/app-stars-rating.component");
var app_text_editor_title_component_1 = require("./components/app-text-editor-title/app-text-editor-title.component");
var app_text_editor_component_1 = require("./components/app-text-editor/app-text-editor.component");
var app_toolbar_component_1 = require("./components/app-toolbar/app-toolbar.component");
var app_user_summary_component_1 = require("./components/app-user-summary/app-user-summary.component");
var app_user_toolbar_card_component_1 = require("./components/app-user-toolbar-card/app-user-toolbar-card.component");
var no_notes_in_notebook_component_1 = require("./components/no-notes-in-notebook/no-notes-in-notebook.component");
var note_card_list_component_1 = require("./components/note-card-list/note-card-list.component");
var note_card_component_1 = require("./components/note-card/note-card.component");
var notebook_card_list_component_1 = require("./components/notebook-card-list/notebook-card-list.component");
var notebook_card_component_1 = require("./components/notebook-card/notebook-card.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var mobile_search_component_1 = require("./mobile-search/mobile-search.component");
var note_component_1 = require("./note/note.component");
var notebooks_component_1 = require("./notebooks/notebooks.component");
var notes_component_1 = require("./notes/notes.component");
var settings_component_1 = require("./settings/settings.component");
var sidenav_1 = require("@angular/material/sidenav");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var expansion_1 = require("@angular/material/expansion");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var menu_1 = require("@angular/material/menu");
var input_1 = require("@angular/material/input");
var delete_note_dialog_component_1 = require("./components/dialogs/delete-note-dialog/delete-note-dialog.component");
var delete_notebook_dialog_component_1 = require("./components/dialogs/delete-notebook-dialog/delete-notebook-dialog.component");
var edit_account_component_1 = require("./components/dialogs/edit-account/edit-account.component");
var edit_note_component_1 = require("./components/dialogs/edit-note/edit-note.component");
var edit_notebook_component_1 = require("./components/dialogs/edit-notebook/edit-notebook.component");
var image_resizer_component_1 = require("./components/dialogs/image-resizer/image-resizer.component");
var leave_areview_component_1 = require("./components/dialogs/leave-areview/leave-areview.component");
var note_details_component_1 = require("./components/dialogs/note-details/note-details.component");
var notebook_details_component_1 = require("./components/dialogs/notebook-details/notebook-details.component");
var review_appreciation_component_1 = require("./components/dialogs/review-appreciation/review-appreciation.component");
var dialog_1 = require("@angular/material/dialog");
var tooltip_1 = require("@angular/material/tooltip");
var checkbox_1 = require("@angular/material/checkbox");
var privateComponents = [
    app_sidenav_component_1.AppSidenavComponent,
    app_toolbar_component_1.AppToolBarComponent,
    app_user_toolbar_card_component_1.AppUserToolbarCardComponent,
    app_search_input_field_component_1.AppSearchInputFieldComponent,
    app_menu_item_component_1.AppMenuItemComponent,
    app_new_object_component_1.AppNewObjectComponent,
    app_mobile_toolbar_component_1.AppMobileToolbarComponent,
    app_user_summary_component_1.AppUserSummaryComponent,
    app_page_actions_component_1.AppPageActionsComponent,
    app_page_actions_mobile_component_1.AppPageActionsMobileComponent,
    app_page_actions_desktop_component_1.AppPageActionsDesktopComponent,
    notebook_card_component_1.NotebookCardComponent,
    notebook_card_list_component_1.NotebookCardListComponent,
    note_card_component_1.NoteCardComponent,
    note_card_list_component_1.NoteCardListComponent,
    app_text_editor_component_1.AppTextEditorComponent,
    app_text_editor_title_component_1.AppTextEditorTitleComponent,
    app_search_result_list_component_1.AppSearchResultListComponent,
    app_search_failed_component_1.AppSearchFailedComponent,
    delete_notebook_dialog_component_1.DeleteNotebookDialogComponent,
    delete_note_dialog_component_1.DeleteNoteDialogComponent,
    app_stars_rating_component_1.AppStarsRatingComponent,
    leave_areview_component_1.LeaveAReviewComponent,
    review_appreciation_component_1.ReviewAppreciationComponent,
    edit_account_component_1.EditAccountComponent,
    app_edit_user_avatar_component_1.AppEditUserAvatarComponent,
    image_resizer_component_1.ImageResizerComponent,
    notebook_details_component_1.NotebookDetailsComponent,
    edit_notebook_component_1.EditNotebookComponent,
    app_cover_image_component_1.AppCoverImageComponent,
    note_details_component_1.NoteDetailsComponent,
    edit_note_component_1.EditNoteComponent,
    no_notes_in_notebook_component_1.NoNotesInNotebookComponent,
];
var PrivateModule = /** @class */ (function () {
    function PrivateModule() {
    }
    PrivateModule.route = '';
    PrivateModule = __decorate([
        core_1.NgModule({
            declarations: __spreadArrays([
                dashboard_component_1.DashboardComponent,
                notebooks_component_1.NotebooksComponent,
                notes_component_1.NotesComponent,
                settings_component_1.SettingsComponent,
                note_component_1.NoteComponent,
                mobile_search_component_1.MobileSearchComponent
            ], privateComponents),
            imports: [
                common_1.CommonModule,
                _private_routing_module_1.PrivateRoutingModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                _component_module_1.ComponentModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                expansion_1.MatExpansionModule,
                progress_spinner_1.MatProgressSpinnerModule,
                menu_1.MatMenuModule,
                input_1.MatInputModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                dialog_1.MatDialogModule,
                tinymce_angular_1.EditorModule,
                ngx_image_cropper_1.ImageCropperModule,
                snack_bar_1.MatSnackBarModule,
                tooltip_1.MatTooltipModule,
                checkbox_1.MatCheckboxModule,
            ],
            providers: [
                dialog_1.MatDialog,
            ]
        })
    ], PrivateModule);
    return PrivateModule;
}());
exports.PrivateModule = PrivateModule;
