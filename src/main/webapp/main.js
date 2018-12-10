(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_security_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/security/login/login.component */ "./src/app/pages/security/login/login.component.ts");
/* harmony import */ var _pages_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/add-user/add-user.component */ "./src/app/pages/user/add-user/add-user.component.ts");
/* harmony import */ var _pages_user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user/list-user/list-user.component */ "./src/app/pages/user/list-user/list-user.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user/edit-user/edit-user.component */ "./src/app/pages/user/edit-user/edit-user.component.ts");
/* harmony import */ var _pages_security_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/security/registration/registration.component */ "./src/app/pages/security/registration/registration.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");









var routes = [
    { path: 'login', component: _pages_security_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _pages_security_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'add-user', component: _pages_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'list-user', component: _pages_user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_5__["ListUserComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'edit-user', component: _pages_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: '', component: _pages_security_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'userapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_security_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/security/login/login.component */ "./src/app/pages/security/login/login.component.ts");
/* harmony import */ var _pages_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user/add-user/add-user.component */ "./src/app/pages/user/add-user/add-user.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user/edit-user/edit-user.component */ "./src/app/pages/user/edit-user/edit-user.component.ts");
/* harmony import */ var _pages_user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user/list-user/list-user.component */ "./src/app/pages/user/list-user/list-user.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_security_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/security/registration/registration.component */ "./src/app/pages/security/registration/registration.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");












 // bug fix





//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Remove later after testing
//import { InMemoryDataService } from './service/in-memory-data.service'; // Remove later after testing

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_security_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _pages_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
                _pages_user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"],
                _pages_user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_10__["ListUserComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _pages_security_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            ],
            providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='primary'>\n  <span class='spacer'></span>\n  © Copyright Angular-Java. {{buildDate | date:'yyyy'}}\n  <span class='spacer'></span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.buildDate = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary'>\n  <mat-icon>home</mat-icon>\n  <span class='spacer'></span>\n  <span>Welcome Home</span>\n  <span class='spacer'></span>\n  <button mat-icon-button [matMenuTriggerFor]='menu'>\n    <mat-icon><i class='material-icons'>view_headline</i></mat-icon>\n  </button>\n\n  <mat-menu #menu='matMenu'>\n    <button mat-menu-item routerLink='/login'>\n      <mat-icon>home</mat-icon>\n      <span>Login</span>\n    </button>\n    <button mat-menu-item routerLink='/list-user'>\n      <mat-icon>list</mat-icon>\n      <span>List Users</span>\n    </button>\n    <button mat-menu-item routerLink='/add-user'>\n      <mat-icon>playlist_add</mat-icon>\n      <span>Add User</span>\n    </button>\n    <button mat-menu-item routerLink='/register'>\n      <mat-icon>spellcheck</mat-icon>\n      <span>Register</span>\n    </button>\n    <button mat-menu-item routerLink='/login'>\n      <i class='material-icons'>settings_power</i>\n      <!--mat-icon>settings_power</mat-icon-->\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/security/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/security/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/security/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/security/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title align='center'>Login</mat-card-title>\n  <mat-card-content align='center'>\n    <form [formGroup]='loginForm' class='login-form-container'>\n      <mat-form-field  [ngClass]=\"{'error': loginForm.controls['email'].errors && loginForm.controls['email'].dirty}\">\n        <input matInput type='text' formControlName='email' placeholder='Username (E-Mail)' required>\n        <div *ngIf=\"loginForm.controls['email'].invalid && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\" class='error-msg'>\n          <div *ngIf=\"loginForm.controls['email'].errors.required\">Username is required.</div>\n          <div *ngIf=\"loginForm.controls['email'].errors.minlength\">Username must be at least 2 characters long.</div>\n          <div *ngIf=\"loginForm.controls['email'].errors.patternInvalid\">Username must be a valid E-Mail address.</div>\n        </div>\n      </mat-form-field>\n      <mat-form-field [ngClass]=\"{'error': loginForm.controls['password'].errors && loginForm.controls['password'].dirty}\">\n        <input matInput type='password' formControlName='password' placeholder='Password' required>\n        <div *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\" class='error-msg'>\n          <div *ngIf=\"loginForm.controls['password'].errors.required\">Password is required.</div>\n          <div *ngIf=\"loginForm.controls['password'].errors.minlength\">Password must be at least 5 characters long.</div>\n          <div *ngIf=\"loginForm.controls['password'].errors.maxlength\">Password must be at most 10 characters long.</div>\n        </div>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions align='right'>\n      <button mat-raised-button color='accent' class='btn' [disabled]='loginForm.invalid' (click)='login()'>Login</button>\n      <a mat-raised-button routerLink='/register'>Register</a>\n  </mat-card-actions>\n</mat-card>\n\n<!--p>Form Value: {{loginForm.value | json }}</p>\n<p>Form status: {{loginForm.status | json }}</p>\n<p>Name value: {{loginForm.get('email').value }}</p>\n\n<p>Username errors : {{loginForm.controls['email'].errors && loginForm.controls['email'].dirty}}</p>\n<p>Username is valid : {{loginForm.controls['email'].valid}}</p>\n<p>Email pattern invalid : {{loginForm.controls['email'].errors.patternInvalid}}</p>\n\n<p>Pwd show errors : {{loginForm.controls['password'].errors && loginForm.controls['password'].dirty}}</p>\n<p>Pwd required : {{loginForm.controls['password'].errors.required}}</p>\n<p>Pwd valid : {{loginForm.controls['password'].valid}}</p-->"

/***/ }),

/***/ "./src/app/pages/security/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/security/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_patternValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/patternValidator */ "./src/app/util/patternValidator.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authSvc) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authSvc = authSvc;
        this.submitted = false;
        this.invalidLogin = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authSvc.logout();
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_util_patternValidator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('LoginComponent: login() : ' + this.loginForm.value + ' email ' + this.loginForm.controls['email'].value + ' password ' + this.loginForm.controls['password'].value); //+' returnUrl '+this.returnUrl);
        this.loading = true;
        this.authSvc.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
            .subscribe(function (data) {
            console.log('Login: ' + _this.loginForm.controls['email'].value + ' Logged in!!');
            _this.router.navigate(['list-user']);
        }, function (error) {
            console.log('Login: ' + _this.loginForm.controls['email'].value + ' Logged FAILURE!!');
            _this.router.navigate(['register']);
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/security/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/security/registration/registration.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/security/registration/registration.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/security/registration/registration.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/security/registration/registration.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title align='center'>Registration Form</mat-card-title>\n    <mat-card-content align='center'>\n      <form [formGroup]='registrationForm' class='login-form-container'>\n  \n        <mat-form-field [ngClass]=\"{'error': registrationForm.controls['email'].errors && registrationForm.controls['email'].dirty}\">\n          <input matInput type='text' formControlName='email' placeholder='E-Mail' required>\n          <div *ngIf=\"registrationForm.controls['email'].invalid && (registrationForm.controls['email'].dirty || registrationForm.controls['email'].touched)\" class='error-msg'>\n            <div *ngIf=\"registrationForm.controls['email'].errors.required\">Username is required.</div>\n            <div *ngIf=\"registrationForm.controls['email'].errors.minlength\">Username must be at least 2 characters long.</div>\n            <div *ngIf=\"registrationForm.controls['email'].errors.patternInvalid\">Username must be a valid E-Mail address.</div>\n          </div>\n        </mat-form-field>\n  \n        <mat-form-field [ngClass]=\"{'error': registrationForm.controls['firstName'].errors && registrationForm.controls['firstName'].dirty}\">\n            <input matInput type='text' formControlName='firstName' placeholder='First Name' required>\n            <div *ngIf=\"registrationForm.controls['firstName'].invalid && (registrationForm.controls['firstName'].dirty || registrationForm.controls['firstName'].touched)\" class='error-msg'>\n              <div *ngIf=\"registrationForm.controls['firstName'].errors.required\">First Name is required.</div>\n              <div *ngIf=\"registrationForm.controls['firstName'].errors.minlength\">First Name must be at least 2 characters long.</div>\n            </div>\n          </mat-form-field>\n          <mat-form-field [ngClass]=\"{'error': registrationForm.controls['lastName'].errors && registrationForm.controls['lastName'].dirty}\">\n            <input matInput type='text' formControlName='lastName' placeholder='Last Name' required>\n            <div *ngIf=\"registrationForm.controls['lastName'].invalid && (registrationForm.controls['lastName'].dirty || registrationForm.controls['lastName'].touched)\" class='error-msg'>\n              <div *ngIf=\"registrationForm.controls['lastName'].errors.required\">Last Name is required.</div>\n              <div *ngIf=\"registrationForm.controls['lastName'].errors.minlength\">Last Name must be at least 2 characters long.</div>\n            </div>\n          </mat-form-field>\n  \n        <mat-form-field>\n          <input matInput type='password' formControlName='password' placeholder='Password' required>\n          <div *ngIf=\"registrationForm.controls['password'].invalid && (registrationForm.controls['password'].dirty || registrationForm.controls['password'].touched)\" class='error-msg'>\n            <div *ngIf=\"registrationForm.controls['password'].errors.required\">Password is required.</div>\n            <div *ngIf=\"registrationForm.controls['password'].errors.minlength\">Password must be at least 5 characters long.</div>\n            <div *ngIf=\"registrationForm.controls['password'].errors.maxlength\">Password must be at most 10 characters long.</div>\n          </div>\n        </mat-form-field>      \n      </form>\n    </mat-card-content>\n    <mat-card-actions align='right'>\n        <button mat-raised-button color='accent' class='btn' [disabled]='registrationForm.invalid' (click)='onSubmit()'>Register</button>\n        <a mat-raised-button routerLink='/login'>Login</a>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./src/app/pages/security/registration/registration.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/security/registration/registration.component.ts ***!
  \***********************************************************************/
/*! exports provided: forbiddenNameValidator, RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_patternValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/patternValidator */ "./src/app/util/patternValidator.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");





function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.invalidRegistration = false;
    }
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('RegComp: User Registration starting ...');
        this.submitted = true;
        if (this.registrationForm.invalid)
            return;
        this.userService.createUser(this.registrationForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-user']);
        });
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            id: [],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), forbiddenNameValidator(/bob/i)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_util_patternValidator__WEBPACK_IMPORTED_MODULE_4__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]]
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/pages/security/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/pages/security/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/add-user/add-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/user/add-user/add-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user/add-user/add-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/add-user/add-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add User</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input formControlName=\"firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input formControlName=\"lastName\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n    </div>\n\n    <button class=\"btn btn-success\">Add User</button>\n  </form>\n</div-->\n\n<mat-card>\n    <mat-card-title align='center'>Add User</mat-card-title>\n    <mat-card-content align='center'>\n      <form [formGroup]='addForm' class='login-form-container'>\n  \n        <mat-form-field [ngClass]=\"{'error': addForm.controls['email'].errors && addForm.controls['email'].dirty}\">\n          <input matInput type='text' formControlName='email' placeholder='E-Mail' required>\n          <div *ngIf=\"addForm.controls['email'].invalid && (addForm.controls['email'].dirty || addForm.controls['email'].touched)\" class='error-msg'>\n            <div *ngIf=\"addForm.controls['email'].errors.required\">Username is required.</div>\n            <div *ngIf=\"addForm.controls['email'].errors.minlength\">Username must be at least 2 characters long.</div>\n            <div *ngIf=\"addForm.controls['email'].errors.patternInvalid\">Username must be a valid E-Mail address.</div>\n          </div>\n        </mat-form-field>\n  \n        <mat-form-field [ngClass]=\"{'error': addForm.controls['firstName'].errors && addForm.controls['firstName'].dirty}\">\n            <input matInput type='text' formControlName='firstName' placeholder='First Name' required>\n            <div *ngIf=\"addForm.controls['firstName'].invalid && (addForm.controls['firstName'].dirty || addForm.controls['firstName'].touched)\" class='error-msg'>\n              <div *ngIf=\"addForm.controls['firstName'].errors.required\">First Name is required.</div>\n              <div *ngIf=\"addForm.controls['firstName'].errors.minlength\">First Name must be at least 2 characters long.</div>\n            </div>\n          </mat-form-field>\n          <mat-form-field [ngClass]=\"{'error': addForm.controls['lastName'].errors && addForm.controls['lastName'].dirty}\">\n            <input matInput type='text' formControlName='lastName' placeholder='Last Name' required>\n            <div *ngIf=\"addForm.controls['lastName'].invalid && (addForm.controls['lastName'].dirty || addForm.controls['lastName'].touched)\" class='error-msg'>\n              <div *ngIf=\"addForm.controls['lastName'].errors.required\">Last Name is required.</div>\n              <div *ngIf=\"addForm.controls['lastName'].errors.minlength\">Last Name must be at least 2 characters long.</div>\n            </div>\n          </mat-form-field>\n  \n        <mat-form-field>\n          <input matInput type='password' formControlName='password' placeholder='Password' required>\n          <div *ngIf=\"addForm.controls['password'].invalid && (addForm.controls['password'].dirty || addForm.controls['password'].touched)\" class='error-msg'>\n            <div *ngIf=\"addForm.controls['password'].errors.required\">Password is required.</div>\n            <div *ngIf=\"addForm.controls['password'].errors.minlength\">Password must be at least 5 characters long.</div>\n            <div *ngIf=\"addForm.controls['password'].errors.maxlength\">Password must be at most 10 characters long.</div>\n          </div>\n        </mat-form-field>      \n      </form>\n    </mat-card-content>\n    <mat-card-actions align='right'>\n        <button mat-raised-button color='accent' class='btn' [disabled]='addForm.invalid' (click)='onSubmit()'>Add User</button>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./src/app/pages/user/add-user/add-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user/add-user/add-user.component.ts ***!
  \***********************************************************/
/*! exports provided: forbiddenNameValidator, AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _util_patternValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/patternValidator */ "./src/app/util/patternValidator.ts");






function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), forbiddenNameValidator(/bob/i)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_util_patternValidator__WEBPACK_IMPORTED_MODULE_5__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.createUser(this.addForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-user']);
        });
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/pages/user/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/pages/user/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/edit-user/edit-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/edit-user/edit-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user/edit-user/edit-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/edit-user/edit-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title align='center'>Edit User</mat-card-title>\n  <mat-card-content align='center'>\n    <form [formGroup]='editForm' class='login-form-container'>\n\n      <mat-form-field [ngClass]=\"{'error': editForm.controls['email'].errors && editForm.controls['email'].dirty}\">\n        <input matInput type='text' formControlName='email' placeholder='E-Mail' required>\n        <div *ngIf=\"editForm.controls['email'].invalid && (editForm.controls['email'].dirty || editForm.controls['email'].touched)\" class='error-msg'>\n          <div *ngIf=\"editForm.controls['email'].errors.required\">Username is required.</div>\n          <div *ngIf=\"editForm.controls['email'].errors.minlength\">Username must be at least 2 characters long.</div>\n          <div *ngIf=\"editForm.controls['email'].errors.patternInvalid\">Username must be a valid E-Mail address.</div>\n        </div>\n      </mat-form-field>\n\n      <mat-form-field [ngClass]=\"{'error': editForm.controls['firstName'].errors && editForm.controls['firstName'].dirty}\">\n          <input matInput type='text' formControlName='firstName' placeholder='First Name' required>\n          <div *ngIf=\"editForm.controls['firstName'].invalid && (editForm.controls['firstName'].dirty || editForm.controls['firstName'].touched)\" class='error-msg'>\n            <div *ngIf=\"editForm.controls['firstName'].errors.required\">First Name is required.</div>\n            <div *ngIf=\"editForm.controls['firstName'].errors.minlength\">First Name must be at least 2 characters long.</div>\n          </div>\n        </mat-form-field>\n        <mat-form-field [ngClass]=\"{'error': editForm.controls['lastName'].errors && editForm.controls['lastName'].dirty}\">\n          <input matInput type='text' formControlName='lastName' placeholder='Last Name' required>\n          <div *ngIf=\"editForm.controls['lastName'].invalid && (editForm.controls['lastName'].dirty || editForm.controls['lastName'].touched)\" class='error-msg'>\n            <div *ngIf=\"editForm.controls['lastName'].errors.required\">Last Name is required.</div>\n            <div *ngIf=\"editForm.controls['lastName'].errors.minlength\">Last Name must be at least 2 characters long.</div>\n          </div>\n        </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type='password' formControlName='password' placeholder='Password' required>\n        <div *ngIf=\"editForm.controls['password'].invalid && (editForm.controls['password'].dirty || editForm.controls['password'].touched)\" class='error-msg'>\n          <div *ngIf=\"editForm.controls['password'].errors.required\">Password is required.</div>\n          <div *ngIf=\"editForm.controls['password'].errors.minlength\">Password must be at least 5 characters long.</div>\n          <div *ngIf=\"editForm.controls['password'].errors.maxlength\">Password must be at most 10 characters long.</div>\n        </div>\n      </mat-form-field>      \n    </form>\n  </mat-card-content>\n  <mat-card-actions align='right'>\n      <button mat-raised-button color='accent' class='btn' [disabled]='editForm.invalid' (click)='onSubmit()'>Update User</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/user/edit-user/edit-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/*! exports provided: forbiddenNameValidator, EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_patternValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/patternValidator */ "./src/app/util/patternValidator.ts");







function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('editUserId');
        if (!userId) {
            alert('Invalid action.');
            this.router.navigate(['list-user']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), forbiddenNameValidator(/bob/i)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_util_patternValidator__WEBPACK_IMPORTED_MODULE_6__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            token: ['']
        });
        this.userService.getUserById(+userId)
            .subscribe(function (data) {
            console.log('Edit:Usr ' + JSON.stringify(data));
            _this.editForm.setValue(data);
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.updateUser(this.editForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['list-user']);
        }, function (error) {
            alert(error);
        });
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/pages/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/pages/user/edit-user/edit-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/list-user/list-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/list-user/list-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user/list-user/list-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/list-user/list-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title align='center'>User List</mat-card-title>\n    <mat-card-content align='center'>\n\n        <div *ngIf='dataSource.data.length > 0'>\n            <div class='example-header'>\n                <mat-form-field>\n                <input matInput (keyup)='applyFilter($event.target.value)' placeholder='Filter'>\n                </mat-form-field>\n            </div>\n            <div class='example-container mat-elevation-z8'>\n                <mat-table [dataSource]='dataSource' matSort>\n\n                <ng-container matColumnDef='id'>\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n                    <mat-cell *matCellDef='let user'>{{user.id}}</mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef='firstName'>\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n                    <mat-cell *matCellDef='let user'>{{user.firstName}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef='lastName'>\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n                    <mat-cell *matCellDef='let user'>{{user.lastName}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef='email'>\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>E-Mail</mat-header-cell>\n                    <mat-cell *matCellDef='let user'>{{user.email}}</mat-cell>\n                </ng-container>\n            \n                <ng-container matColumnDef=\"edit\">\n                    <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">\n                        <button mat-raised-button (click)='editUser(user)'>\n                            <mat-icon color='primary'>save</mat-icon>\n                        </button>\n                    </mat-cell>\n                </ng-container>\n            \n                <ng-container matColumnDef=\"delete\">\n                    <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">\n                        <button mat-raised-button (click)='deleteUser(user)'>\n                            <mat-icon color='accent'>\n                                <i class=\"material-icons\">remove_circle_outline</i>\n                            </mat-icon>\n                        </button>\n                    </mat-cell>\n                </ng-container>\n            \n                <mat-header-row *matHeaderRowDef='displayedColumns'></mat-header-row>\n                <mat-row *matRowDef='let user; columns: displayedColumns;' [ngClass]=\"{'highlight': selectedRowIndex == user.id}\" (click)='highlightTableRow(user)'></mat-row>\n                </mat-table>\n            </div>\n        </div>\n        \n    </mat-card-content>\n    <mat-card-actions align='right'>\n        <button mat-raised-button color='accent' class='btn' (click)='addUser()'>Add User</button>\n        <a mat-raised-button routerLink='/register'>Register</a>\n    </mat-card-actions>\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/pages/user/list-user/list-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/list-user/list-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





// import { Component, AfterViewInit, ViewChild } from '@angular/core';
var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.displayedColumns = ['id', 'firstName', 'lastName', 'email', 'edit', 'delete'];
        this.selectedRowIndex = '';
        this.populateUserTable();
    }
    ListUserComponent.prototype.populateUserTable = function () {
        var _this = this;
        var users = [];
        this.userService.getUsers()
            .subscribe(function (users) { return _this.dataSource.data = users; });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](users);
        this.selectedUser = undefined;
    };
    ListUserComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListUserComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLocaleLowerCase();
        this.dataSource.filter = filterValue;
    };
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) { _this.users = data; });
    };
    ListUserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user)
            .subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== user; });
            _this.populateUserTable();
        });
    };
    ListUserComponent.prototype.editUser = function (user) {
        localStorage.removeItem("editUserId");
        if (user.id !== undefined)
            localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edit-user']);
    };
    ListUserComponent.prototype.addUser = function () {
        this.router.navigate(['add-user']);
    };
    ListUserComponent.prototype.highlightTableRow = function (user) {
        this.selectedRowIndex = user.id.toString();
        this.selectedUser = user;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ListUserComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ListUserComponent.prototype, "sort", void 0);
    ListUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/pages/user/list-user/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.css */ "./src/app/pages/user/list-user/list-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    // Check if the user is logged in before calling http
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url }
        });
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'api/user/login';
    }
    AuthService.prototype.getHeaders = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        return httpOptions;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        console.log('AuthSvc: login uname ' + username + ' pwd ' + password);
        return this.http.post(this.loginUrl, JSON.stringify({ username: username, password: password }), this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this.log("Logged in user username=" + user.email);
            localStorage.setItem('currentUser', JSON.stringify(user));
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        console.log('AuthSvc: logout currentUser ' + localStorage.getItem('currentUser'));
    };
    AuthService.prototype.log = function (message) {
        console.log('usrSvc : ' + message + '');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.usrUrl = 'api/user';
    }
    UserService.prototype.getHeaders = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        return httpOptions;
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.usrUrl, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (users) { return _this.log("fetched " + users.length + " users"); }));
    };
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'string' ? user : user.id;
        var url = this.usrUrl + "/" + id;
        return this.http.delete(url, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted user id=" + id); }));
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        var url = this.usrUrl + "/" + id;
        return this.http.get(url, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched user id=" + id); }));
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.put(this.usrUrl, user, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated user username=" + user.email); }));
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.usrUrl, user, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.log("added user username=" + user.email); }));
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.usrUrl, user);
    };
    UserService.prototype.log = function (message) {
        console.log('usrSvc : ' + message + '');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/util/patternValidator.ts":
/*!******************************************!*\
  !*** ./src/app/util/patternValidator.ts ***!
  \******************************************/
/*! exports provided: patternValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidator", function() { return patternValidator; });
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\phil\dev\projects\examples\javascript\angular2\userapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map