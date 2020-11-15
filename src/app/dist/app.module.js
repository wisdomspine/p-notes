"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var _component_module_1 = require("./@component/@component.module");
var _core_module_1 = require("./@core/@core.module");
var tinymce_angular_1 = require("@tinymce/tinymce-angular");
var home_component_1 = require("./public/home/home.component");
var home_mobile_component_1 = require("./public/home-mobile/home-mobile.component");
var home_desktop_component_1 = require("./public/home-desktop/home-desktop.component");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var fire_1 = require("@angular/fire");
var environment_1 = require("src/environments/environment");
var select_1 = require("@angular/material/select");
var service_worker_1 = require("@angular/service-worker");
var analytics_1 = require("@angular/fire/analytics");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                home_mobile_component_1.HomeMobileComponent,
                home_desktop_component_1.HomeDesktopComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                analytics_1.AngularFireAnalyticsModule,
                _component_module_1.ComponentModule,
                _core_module_1.CoreModule,
                tinymce_angular_1.EditorModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
            ],
            providers: [
                { provide: tinymce_angular_1.TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
            ],
            exports: [
                fire_1.AngularFireModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
