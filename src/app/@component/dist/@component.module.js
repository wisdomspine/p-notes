"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var tooltip_1 = require("@angular/material/tooltip");
var dialog_1 = require("@angular/material/dialog");
var checkbox_1 = require("@angular/material/checkbox");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_dialog_component_1 = require("./dialogs/auth-dialog/auth-dialog.component");
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        core_1.NgModule({
            declarations: [
                auth_dialog_component_1.AuthDialogComponent,
            ],
            imports: [
                common_1.CommonModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                router_1.RouterModule,
                tooltip_1.MatTooltipModule,
                forms_1.FormsModule,
                dialog_1.MatDialogModule,
                checkbox_1.MatCheckboxModule,
            ],
            exports: [
                auth_dialog_component_1.AuthDialogComponent,
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());
exports.ComponentModule = ComponentModule;
