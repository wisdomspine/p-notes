"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrintService = void 0;
var core_1 = require("@angular/core");
var Note_1 = require("../models/Note");
var tiny_print_1 = require("tiny-print");
var PrintService = /** @class */ (function () {
    function PrintService() {
        this._elId = "_k_app_tiny";
    }
    PrintService.prototype.print = function (note) {
        var _this = this;
        if (note === void 0) { note = new Note_1.Note({}); }
        var promise = new Promise(function (resolve) {
            var div = document.querySelector("#" + _this.elId);
            div.style.display = "block";
            div.innerHTML = "\n        <h1 style='text-transform: capitalize;'>" + note.title + "</h1>\n        " + (note.content && note.content.value || '') + "\n      ";
            div.style.padding = "24px";
            tiny_print_1["default"](div, {
                scanStyles: true,
                scanHTML: true,
                hidePageRule: true
            });
            resolve();
        });
        return promise;
        ;
    };
    Object.defineProperty(PrintService.prototype, "elId", {
        get: function () {
            return this._elId;
        },
        enumerable: false,
        configurable: true
    });
    PrintService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PrintService);
    return PrintService;
}());
exports.PrintService = PrintService;
