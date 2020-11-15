"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppDialogService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var auth_dialog_component_1 = require("src/app/@component/dialogs/auth-dialog/auth-dialog.component");
var delete_note_dialog_component_1 = require("src/app/@private/components/dialogs/delete-note-dialog/delete-note-dialog.component");
var delete_notebook_dialog_component_1 = require("src/app/@private/components/dialogs/delete-notebook-dialog/delete-notebook-dialog.component");
var edit_account_component_1 = require("src/app/@private/components/dialogs/edit-account/edit-account.component");
var edit_note_component_1 = require("src/app/@private/components/dialogs/edit-note/edit-note.component");
var edit_notebook_component_1 = require("src/app/@private/components/dialogs/edit-notebook/edit-notebook.component");
var image_resizer_component_1 = require("src/app/@private/components/dialogs/image-resizer/image-resizer.component");
var leave_areview_component_1 = require("src/app/@private/components/dialogs/leave-areview/leave-areview.component");
var note_details_component_1 = require("src/app/@private/components/dialogs/note-details/note-details.component");
var notebook_details_component_1 = require("src/app/@private/components/dialogs/notebook-details/notebook-details.component");
var review_appreciation_component_1 = require("src/app/@private/components/dialogs/review-appreciation/review-appreciation.component");
var AppDialogService = /** @class */ (function () {
    function AppDialogService(dialog) {
        this.dialog = dialog;
        this.minWidth = 250;
        this.panelClass = 'app-panel';
    }
    AppDialogService.prototype.confirmNotebookDelete = function () {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(delete_notebook_dialog_component_1.DeleteNotebookDialogComponent, {
            maxWidth: 400,
            minWidth: this.minWidth,
            panelClass: "" + this.panelClass
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.confirmNoteDelete = function () {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(delete_note_dialog_component_1.DeleteNoteDialogComponent, {
            maxWidth: 400,
            minWidth: this.minWidth,
            panelClass: "" + this.panelClass
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.startReview = function () {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(leave_areview_component_1.LeaveAReviewComponent, {
            maxWidth: 400,
            minWidth: this.minWidth,
            panelClass: "" + this.panelClass
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.showReviewAppreciation = function () {
        this.dialog.open(review_appreciation_component_1.ReviewAppreciationComponent, {
            maxWidth: 400,
            minWidth: this.minWidth,
            panelClass: "" + this.panelClass
        });
    };
    AppDialogService.prototype.editAccount = function (account) {
        var _this = this;
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(edit_account_component_1.EditAccountComponent, {
            maxWidth: 500,
            minWidth: 400,
            panelClass: "" + this.panelClass,
            data: {
                account: account,
                imageChangeHandler: function (file) {
                    return _this.resizeImage({ file: file });
                }
            }
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.resizeImage = function (data) {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(image_resizer_component_1.ImageResizerComponent, {
            maxWidth: 500,
            minWidth: 400,
            panelClass: "" + this.panelClass,
            data: data
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.showNotebookDetails = function (notebook) {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(notebook_details_component_1.NotebookDetailsComponent, {
            maxWidth: 500,
            minWidth: 300,
            panelClass: "" + this.panelClass,
            data: notebook
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.editNotebook = function (notebook) {
        var _this = this;
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(edit_notebook_component_1.EditNotebookComponent, {
            maxWidth: 500,
            minWidth: 350,
            panelClass: "" + this.panelClass,
            data: {
                notebook: notebook,
                imageChangeHandler: function (file) {
                    return _this.resizeImage({
                        file: file,
                        aspectRatio: 0.772,
                        round: false
                    });
                }
            }
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.showNoteDetails = function (note) {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(note_details_component_1.NoteDetailsComponent, {
            maxWidth: 500,
            minWidth: 300,
            panelClass: "" + this.panelClass,
            data: note
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.editNote = function (input) {
        var _this = this;
        if (input === void 0) { input = {}; }
        if (input && !input.imageChangeHandler) {
            input.imageChangeHandler = function (file) {
                return _this.resizeImage({
                    file: file,
                    aspectRatio: 0.772,
                    round: false
                });
            };
        }
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(edit_note_component_1.EditNoteComponent, {
            maxWidth: 500,
            minWidth: 350,
            panelClass: "" + this.panelClass,
            data: input
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService.prototype.showAuthDialog = function (input) {
        var subject = new rxjs_1.Subject();
        this.dialog
            .open(auth_dialog_component_1.AuthDialogComponent, {
            maxWidth: 300,
            minWidth: 250,
            panelClass: "" + this.panelClass,
            data: input
        })
            .afterClosed()
            .subscribe(function (result) {
            subject.next(result);
            subject.complete();
        });
        return subject;
    };
    AppDialogService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppDialogService);
    return AppDialogService;
}());
exports.AppDialogService = AppDialogService;
