"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotesComponent = void 0;
var core_1 = require("@angular/core");
var route_names_1 = require("src/app/route-names");
var NotesComponent = /** @class */ (function () {
    function NotesComponent(noteService, notebookService, activeRoute) {
        var _this = this;
        this.noteService = noteService;
        this.notebookService = notebookService;
        this.notes = [];
        this.notebookIdSubscription = activeRoute.queryParamMap.subscribe(function (query) {
            _this.notebookId = query.get("notebook");
            notebookService.notebook(_this.notebookId).subscribe(function (book) {
                _this.notebook = book;
            });
            if (_this.notesSubscription)
                _this.notesSubscription.unsubscribe();
            _this.notesSubscription = noteService.notes({ notebookId: "" + (_this.notebookId || '') || null }).subscribe(function (notes) {
                _this.notes = notes;
            });
        });
    }
    NotesComponent.prototype.ngOnDestroy = function () {
        this.notesSubscription && this.notesSubscription.unsubscribe();
        this.notebookIdSubscription && this.notebookIdSubscription.unsubscribe();
    };
    NotesComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(NotesComponent.prototype, "showActions", {
        get: function () {
            return Boolean(this.notebook);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotesComponent.prototype, "title", {
        get: function () {
            return this.notebook && this.notebook.name || "Notes";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotesComponent.prototype, "canDeleteNotebook", {
        get: function () {
            return this.notebook && !this.notebook.permanent;
        },
        enumerable: false,
        configurable: true
    });
    NotesComponent.prototype.handleDelete = function (index) {
        this.noteService["delete"](this.notes[index] && this.notes[index].id);
    };
    NotesComponent.prototype.handleSettings = function (index) {
        this.noteService.editNoteDetails(this.notes[index]);
    };
    NotesComponent.prototype.printNote = function (index) {
        this.noteService.print(this.notes[index]);
    };
    NotesComponent.prototype.deleteNotebook = function () {
        this.notebookService["delete"](this.notebookId);
    };
    NotesComponent.prototype.editNotebook = function () {
        this.notebookService.editNotebookDetails(this.notebook);
    };
    NotesComponent.prototype.notebookDetails = function () {
        this.notebookService.showDetails(this.notebook);
    };
    NotesComponent.prototype.createNote = function () {
        this.noteService.addNote(this.notebook);
    };
    NotesComponent.routeName = route_names_1.NotesComponentRouteName;
    NotesComponent.route = route_names_1.NotesComponentRoute;
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.scss']
        })
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
