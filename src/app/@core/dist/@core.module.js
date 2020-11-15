"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var auth_1 = require("@angular/fire/auth");
var storage_1 = require("@angular/fire/storage");
var firestore_1 = require("@angular/fire/firestore");
var snack_bar_1 = require("@angular/material/snack-bar");
var forms_1 = require("@angular/forms");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule,
                firestore_1.AngularFirestoreModule,
            ],
            providers: [
                snack_bar_1.MatSnackBar,
                forms_1.FormBuilder,
                { provide: snack_bar_1.MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3500 } }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
