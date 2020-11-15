"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AccountService = /** @class */ (function () {
    function AccountService(dialogService, authService, appStorage, snackBarService) {
        var _this = this;
        this.dialogService = dialogService;
        this.authService = authService;
        this.appStorage = appStorage;
        this.snackBarService = snackBarService;
        this._userSubject = new rxjs_1.BehaviorSubject({});
        authService.user.pipe(operators_1.map(function (u) {
            return u ? { name: u.displayName, email: u.email, image: u.photoURL || null, uid: u.uid } : null;
        })).subscribe(function (u) {
            _this._userSubject.next(u);
        });
        this._userSubject.subscribe(function (u) {
            _this.currentUser = u;
        });
    }
    AccountService.prototype.edit = function () {
        var _this = this;
        this.dialogService
            .editAccount(this.currentUser)
            .subscribe(function (result) {
            if (result) {
                _this.updateAccount(result.user, result.blob || null);
            }
        });
    };
    Object.defineProperty(AccountService.prototype, "currentAccount", {
        get: function () {
            return this._userSubject;
        },
        enumerable: false,
        configurable: true
    });
    AccountService.prototype.updateAccount = function (user, photo) {
        var _this = this;
        var updateSubscription = null;
        if (photo) {
            updateSubscription = this.updateProfilePhoto(photo).subscribe(function (url) {
                updateSubscription.unsubscribe();
                _this.updateData(__assign(__assign({}, user), { image: url }));
            });
        }
        else {
            this.updateData(user);
        }
    };
    AccountService.prototype.updateData = function (user) {
        var _this = this;
        var updateSubscription = null;
        updateSubscription = this.authService.user.subscribe(function (u) {
            u.updateProfile({ displayName: user.name + "", photoURL: user.image + '' }).then(function () {
                _this.snackBarService.show("Account updated");
                _this._userSubject.next(user);
            })["catch"](function (error) {
                _this.snackBarService.error("Account not updated, please try again");
            });
            updateSubscription.unsubscribe();
        });
    };
    AccountService.prototype.updateProfilePhoto = function (photo) {
        return this.appStorage.upload(photo, this.currentUser);
    };
    AccountService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
