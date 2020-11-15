"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var route_names_1 = require("src/app/route-names");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(mediaQueryService, router) {
        this.router = router;
        this.isSmallScreen = mediaQueryService.isSmallScreen;
        this.router.events.pipe(operators_1.filter(function (e) { return e instanceof router_1.NavigationStart || e instanceof router_1.NavigationEnd || e instanceof router_1.NavigationCancel || e instanceof router_1.NavigationError; })).subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                document.body.classList.add("loading");
            }
            else {
                document.body.classList.remove("loading");
            }
        });
    }
    HomeComponent.prototype.ngOnDestroy = function () {
        document.body.classList.remove("loading");
        document.querySelector("html").style.overflowY = null;
        document.body.classList.remove("home");
    };
    HomeComponent.prototype.ngOnInit = function () {
        document.querySelector("html").style.overflowY = "auto";
        document.body.classList.add("home");
    };
    HomeComponent.routeName = route_names_1.HomeComponentRouteName;
    HomeComponent.route = route_names_1.HomeComponentRoute;
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
