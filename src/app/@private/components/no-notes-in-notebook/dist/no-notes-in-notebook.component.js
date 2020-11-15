"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoNotesInNotebookComponent = void 0;
var core_1 = require("@angular/core");
var NoNotesInNotebookComponent = /** @class */ (function () {
    function NoNotesInNotebookComponent() {
        this.create = new core_1.EventEmitter();
    }
    NoNotesInNotebookComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NoNotesInNotebookComponent.prototype, "notebookName", {
        get: function () {
            return this.notebook && 'in ' + this.notebook.name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], NoNotesInNotebookComponent.prototype, "notebook");
    __decorate([
        core_1.Output()
    ], NoNotesInNotebookComponent.prototype, "create");
    NoNotesInNotebookComponent = __decorate([
        core_1.Component({
            selector: 'app-no-notes-in-notebook',
            templateUrl: './no-notes-in-notebook.component.html',
            styleUrls: ['./no-notes-in-notebook.component.scss']
        })
    ], NoNotesInNotebookComponent);
    return NoNotesInNotebookComponent;
}());
exports.NoNotesInNotebookComponent = NoNotesInNotebookComponent;
