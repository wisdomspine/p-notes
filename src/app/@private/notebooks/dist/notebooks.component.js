"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotebooksComponent = void 0;
var core_1 = require("@angular/core");
var NotebooksComponent = /** @class */ (function () {
    function NotebooksComponent(dialogService, notebookService) {
        var _this = this;
        this.dialogService = dialogService;
        this.notebookService = notebookService;
        this.notebooks = [];
        notebookService.notebooks().subscribe(function (books) {
            _this.notebooks = books;
        });
    }
    NotebooksComponent.prototype.ngOnInit = function () { };
    NotebooksComponent.prototype.handleDelete = function (index) {
        this.notebookService["delete"](this.notebooks[index].id);
    };
    NotebooksComponent.prototype.editNotebookDetails = function (index) {
        this.notebookService.editNotebookDetails(this.notebooks[index]);
    };
    NotebooksComponent.routeName = 'notebooks';
    NotebooksComponent.route = "notebooks";
    NotebooksComponent = __decorate([
        core_1.Component({
            selector: 'app-notebooks',
            templateUrl: './notebooks.component.html',
            styleUrls: ['./notebooks.component.scss']
        })
    ], NotebooksComponent);
    return NotebooksComponent;
}());
exports.NotebooksComponent = NotebooksComponent;
