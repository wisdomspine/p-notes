"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var Notebook_1 = require("src/app/@core/models/Notebook");
var mobile_search_component_1 = require("../mobile-search/mobile-search.component");
var notebooks_component_1 = require("../notebooks/notebooks.component");
var notes_component_1 = require("../notes/notes.component");
var settings_component_1 = require("../settings/settings.component");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(mediaQueryService, menuState, searchService, notebookService, noteService, dialogService, snackBarService, printService) {
        this.searchService = searchService;
        this.notebookService = notebookService;
        this.noteService = noteService;
        this.dialogService = dialogService;
        this.snackBarService = snackBarService;
        this.printService = printService;
        this.searching = false;
        this.search = {};
        this.searchResults = [];
        this.menu = [
            { link: notebooks_component_1.NotebooksComponent.route + "/", text: 'Notebooks', icon: 'book' },
            { link: notes_component_1.NotesComponent.route + "/", text: 'Notes', icon: 'description' },
            { link: settings_component_1.SettingsComponent.route + "/", text: 'Settings', icon: 'settings' },
        ];
        this.mobileMenu = [
            { link: notebooks_component_1.NotebooksComponent.route + "/", text: 'Notebooks', icon: 'book' },
            { link: notes_component_1.NotesComponent.route + "/", text: 'Notes', icon: 'description' },
            {
                link: mobile_search_component_1.MobileSearchComponent.route + "/",
                text: 'Search',
                icon: 'search'
            },
            { link: settings_component_1.SettingsComponent.route + "/", text: 'Settings', icon: 'settings' },
        ];
        this.isSmallScreen = mediaQueryService.isSmallScreen;
        this.menuState = menuState.onStateChange;
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.searchSubscription && this.searchSubscription.unsubscribe();
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype._processSearch = function () {
        var _this = this;
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
        this.searchSubscription = this.searchService.search({
            search: "" + (this.search.search || ''),
            notebooks: this.search.notebooks,
            notes: this.search.notes
        }).subscribe(function (results) {
            _this.searchResults = results;
        });
    };
    DashboardComponent.prototype.startSearch = function (output) {
        this.search = output || {};
        this.searching = true;
        this._processSearch();
    };
    DashboardComponent.prototype.stopSearch = function () {
        this.searching = false;
        this.search = {};
    };
    DashboardComponent.prototype.newNotebook = function () {
        this.notebookService.addNotebook();
    };
    DashboardComponent.prototype.newNote = function () {
        this.noteService.addNote();
    };
    /**
     * Handle search operations
     */
    DashboardComponent.prototype.deleteNotebook = function (notebook) {
        this.notebookService["delete"](notebook.id);
    };
    DashboardComponent.prototype.editNotebookDetails = function (notebook) {
        this.notebookService.editNotebookDetails(notebook);
    };
    DashboardComponent.prototype.showNotebookDetails = function (notebook) {
        this.notebookService.showDetails(notebook);
    };
    DashboardComponent.prototype.deleteNote = function (note) {
        this.noteService["delete"](note.id);
    };
    DashboardComponent.prototype.editNoteDetails = function (note) {
        this.noteService.editNoteDetails(note);
    };
    DashboardComponent.prototype.printNote = function (note) {
        // TODO: call note service print method
    };
    DashboardComponent.prototype.showNoteDetails = function (note) {
        this.noteService.showDetails(note);
    };
    DashboardComponent.prototype.handleDetails = function (index) {
        var result = this.searchResults[index];
        if (result instanceof Notebook_1.Notebook) {
            this.showNotebookDetails(result);
        }
        else {
            this.showNoteDetails(result);
        }
    };
    DashboardComponent.prototype.handleSettings = function (index) {
        var result = this.searchResults[index];
        if (result instanceof Notebook_1.Notebook) {
            this.editNotebookDetails(result);
        }
        else {
            this.editNoteDetails(result);
        }
    };
    DashboardComponent.prototype.handleDelete = function (index) {
        var result = this.searchResults[index];
        if (result instanceof Notebook_1.Notebook) {
            this.deleteNotebook(result);
        }
        else {
            this.deleteNote(result);
        }
    };
    DashboardComponent.prototype.handlePrint = function (index) {
        var result = this.searchResults[index];
        this.printNote(result);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
