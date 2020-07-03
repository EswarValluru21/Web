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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getUser = function (userName) {
        var url = apiUrl + "/" + userName;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.postUser = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");
/* harmony import */ var _tourist_guide_tourist_guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tourist-guide/tourist-guide.component */ "./src/app/tourist-guide/tourist-guide.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");









var appRoutes = [
    { path: '', redirectTo: '/tourist', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search-recipe', component: _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_4__["SearchRecipeComponent"] },
    { path: 'tourist', component: _tourist_guide_tourist_guide_component__WEBPACK_IMPORTED_MODULE_5__["TouristGuideComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'users/:userName', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'users', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"] },
    { path: '**', component: _tourist_guide_tourist_guide_component__WEBPACK_IMPORTED_MODULE_5__["TouristGuideComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".image{\r\n  /*height:60em; */\r\n  background-size:cover; width:100%;\r\n  background-image:url('bg3.jpg');\r\n  height: 1000px;\r\n  /*background-position:50% 50%;*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCLENBQUMsV0FBVztFQUNsQyxnQ0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdDQUFnQztDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG4gIC8qaGVpZ2h0OjYwZW07ICovXHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi9pbWFnZXMvYmczLmpwZycpO1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIC8qYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlOyovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n</div>\n"

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
        this.title = 'MashUp';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tourist_guide_tourist_guide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tourist-guide/tourist-guide.component */ "./src/app/tourist-guide/tourist-guide.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__["SearchRecipeComponent"],
                _tourist_guide_tourist_guide_component__WEBPACK_IMPORTED_MODULE_9__["TouristGuideComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_13__["ContactusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl{\r\n    width: 41%;\r\n}\r\n\r\n.lblans{\r\n    width: 58%;\r\n}\r\n\r\n.floatLeft{\r\n    float: left;\r\n}\r\n\r\n.card{\r\n    background-color: black;\r\n    border-radius: 20px;\r\n    width: 35%;\r\n    color: white;\r\n}\r\n\r\n.places{\r\n    margin-bottom: 150px;\r\n    height: 200px;\r\n    margin-right: 24%;\r\n}\r\n\r\n.contact{\r\n    margin-left: 38%;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.contactimg\r\n{\r\n    position: absolute;\r\n    margin-left: 67%;\r\n    margin-top: -64px;\r\n}\r\n\r\n.card-title{\r\n    margin-top: 34px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtDQUN4Qjs7QUFFRDs7SUFFSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYmx7XHJcbiAgICB3aWR0aDogNDElO1xyXG59XHJcblxyXG4ubGJsYW5ze1xyXG4gICAgd2lkdGg6IDU4JTtcclxufVxyXG5cclxuLmZsb2F0TGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wbGFjZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0JTtcclxufVxyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMzglO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0aW1nXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NyU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjRweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"contact\"><b>Contact Us</b></h1>\r\n\r\n<div class=\"card places floatLeft\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\"><a><b><u>Eswar Valluru</u></b></a></h4>\r\n    <img src=\"../../assets/e2.jpeg\" height=\"100px\" width=\"100px\" class=\"contactimg\">\r\n    <span class=\"card-text\"><label class=\"lbl\">Designation:</label> <label class=\"lblans\">CRM</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Phone Number:</label><label class=\"lblans\">612-559-4753</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Email Id:</label><label class=\"lblans\">eswarvalluru@gmail.com</label></span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"card places\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\"><a><b><u>Sai Jaswanth Gattidi</u></b></a></h4>\r\n    <img src=\"../../assets/j1.jpeg\" height=\"100px\" width=\"100px\" class=\"contactimg\">\r\n    <span class=\"card-text\"><label class=\"lbl\">Designation:</label> <label class=\"lblans\">Manager</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Phone Number:</label><label class=\"lblans\">816-703-7685</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Email Id:</label><label class=\"lblans\">saijaswanthgattidi@gmail.com</label></span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card places floatLeft\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\"><a><b><u>Vishnu Vardhan Reddy Manne</u></b></a></h4>\r\n    <img src=\"../../assets/vv2.jpeg\" height=\"100px\" width=\"100px\" class=\"contactimg\">\r\n    <span class=\"card-text\"><label class=\"lbl\">Designation:</label> <label class=\"lblans\">CEO</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Phone Number:</label><label class=\"lblans\">816-663-3935</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Email Id:</label><label class=\"lblans\">vishnuvardhanmanne2201@gmail.com</label></span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card places\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\"><a><b><u>Vandith Thotla</u></b></a></h4>\r\n    <img src=\"../../assets/v2.jpeg\" height=\"100px\" width=\"100px\" class=\"contactimg\">\r\n    <span class=\"card-text\"><label class=\"lbl\">Designation:</label> <label class=\"lblans\">Finance Manager</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Phone Number:</label><label class=\"lblans\">925-329-7339</label></span>\r\n    <span class=\"card-text\"><label class=\"lbl\">Email Id:</label><label class=\"lblans\">thotla.vandith@gmail.com</label></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default background\" style=\"height: 50px\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse tx\">\n      <ul class=\"nav navbar-nav\" style=\"height: 40px; margin-top: -10px;\">\n        <li><a routerLink=\"/home\"><i class=\"fa fa-home\" style=\"font-size: 22px;\"></i></a></li>\n        <li><a routerLink=\"/tourist-guide\"><i class=\"fa fa-search\" style=\"font-size: 22px;\"></i></a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/contactus\"><i class=\"fa fa-phone\" style=\"font-size: 22px;\"></i></a></li>\n      </ul>\n      <h3 style=\"color: white; width: 20% ; margin-left: 45%; margin-top: 5px;\"><b>Solo Friendly...</b></h3>\n      <a routerLink=\"/login\" style=\"margin-top: -31px;margin-left: 96%;position: absolute;\"><i class=\"fa fa-user\" style=\"font-size: 22px; color: white;\"></i></a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
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
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [".background {background:#000000; color: white}", "li a { color: white}", "ul.nav a:hover { color: #fffccc  }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n}\r\n\r\n.child-container {\r\n  color: black;\r\n  text-align: center;\r\n  position: center;\r\n\r\n}\r\n\r\n.desc {\r\n  font-family: Georgia;\r\n  font-size: 17px;\r\n}\r\n\r\n.button {\r\n  background-color: #866e2ad4;\r\n  border: none;\r\n  color: white;\r\n  padding: 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  border-radius: 12px;\r\n  width: 100px;\r\n  margin-top: -35px;\r\n  margin-left: 10%;\r\n}\r\n\r\ni.fa-envelope{\r\n  position: absolute;\r\n  top: 280px;\r\n  left: 58%;\r\n  color: black;\r\n  height: 10px;\r\n  width: 10px;\r\n  font-size: 32px;\r\n}\r\n\r\n.input-field{\r\n  border-radius : 12px;\r\n  height : 45px;\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCOztDQUVsQjs7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG5cclxufVxyXG4uZGVzYyB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY2ZTJhZDQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuaS5mYS1lbnZlbG9wZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyODBweDtcclxuICBsZWZ0OiA1OCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZHtcclxuICBib3JkZXItcmFkaXVzIDogMTJweDtcclxuICBoZWlnaHQgOiA0NXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\r\n  <div class=\"child-container\">\r\n    <h2 style=\"margin-top: 250px;\">Hello, Welcome to <b>Solo Friendly!!! Your Tourist Guide</b></h2>\r\n    <span class=\"desc\" style=\"font-size: 18px;\">Travel has helped us to understand the meaning of life and it has helped\r\n      us become better people. Each time we travel, we see the world with new eyes. Throughout our lives, people have\r\n      thought that because we keep traveling and searching for new things to do, we are not focused.\r\n      They have often thought we are flaky or unfocused.But travel helped us find our purpose and put focus into our lives.\r\n      The more we got lost in our travels, the richer our lives became.\r\n      </span><br><br><br>\r\n    <form [formGroup]=\"homeForm\">\r\n      <div class=\"form-group\" style=\"margin-top: 100px;\">\r\n        <label style=\"font-size: 18px; margin-left: -9%;\">Subscribe to our news letter:</label><br><br>\r\n        <div class=\"input-container\" style=\"float: left; margin-left:34%\">\r\n          <i class=\"fa fa-envelope\"></i>\r\n          <input class=\"input-field\" type=\"text\" placeholder=\"name@example.com\" style=\"width: 260px; margin-top:-8px\" #recipe>\r\n        </div>\r\n        <br>\r\n        <button class=\"btn btn primary col-lg-2 col-lg-offset-5 button\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.wholelogin {\r\n    background-color: black;\r\n    width: 400px;\r\n    height: 400px;\r\n    margin: 7em auto;\r\n    margin-top: 240px !important;\r\n    border-radius: 1.5em;\r\n    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.sign {\r\n    padding-top: 40px;\r\n    color: #8C55AA;\r\n    font-weight: bold;\r\n    font-size: 23px;\r\n}\r\n\r\n.un {\r\n    width: 76%;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    margin-bottom: 50px;\r\n    margin-left: 46px;\r\n    text-align: center;\r\n    margin-bottom: 27px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\nform.form1 {\r\n    padding-top: 40px;\r\n}\r\n\r\n.floatLeft\r\n{\r\n    float: left;\r\n}\r\n\r\n.pass {\r\n    width: 76%;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    margin-bottom: 50px;\r\n    margin-left: 46px;\r\n    text-align: center;\r\n    margin-bottom: 27px;\r\n}\r\n\r\n.un:focus, .pass:focus {\r\n    border: 1px solid  !important;\r\n\r\n}\r\n\r\n.submit {\r\n    cursor: pointer;\r\n    /*border-radius: 5em;*/\r\n    color:white;\r\n    /*background: linear-gradient(to right, #9C27B0, #E040FB);*/\r\n    /*border: 0;*/\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n    margin-left: 11%;\r\n    font-size: 13px;\r\n\r\n    background-color: #866e2ad4;\r\n    border: none;\r\n    /*color: white;*/\r\n    /*padding: 20px;*/\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    /*margin: 4px 2px;*/\r\n    border-radius: 12px;\r\n}\r\n\r\n.forgot {\r\n    /*text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);*/\r\n    /*color: #E1BEE7;*/\r\n    /*padding-top: 15px;*/\r\n    cursor: pointer;\r\n    border-radius: 5em;\r\n    color:black;\r\n    /*background: linear-gradient(to right, #9C27B0, #E040FB);*/\r\n    border: 0;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n    margin-left: 35%;\r\n    font-size: 13px;\r\n    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n/*a {*/\r\n\r\n/*    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);*/\r\n\r\n/*    color: #E1BEE7;*/\r\n\r\n/*    text-decoration: none*/\r\n\r\n/*}*/\r\n\r\n.button {\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    border-radius: 12px;\r\n}\r\n\r\n/*@media (max-width: 600px) {*/\r\n\r\n/*    .main {*/\r\n\r\n/*        border-radius: 0px;*/\r\n\r\n/*    }*/\r\n\r\n/*font awesome icons*/\r\n\r\n/*.min-container .card-panel form .fa {*/\r\n\r\n/*    top: 13px;*/\r\n\r\n/*    right: 1rem;*/\r\n\r\n/*}*/\r\n\r\n/*.form-group a i {*/\r\n\r\n/*    font-family: FontAwesome;*/\r\n\r\n/*    margin: 0 auto;*/\r\n\r\n/*    font-size: 5rem;*/\r\n\r\n/*    font-style: normal;*/\r\n\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixrREFBa0Q7Q0FDckQ7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQ0FBa0M7Q0FDckM7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBQ0Q7O0lBRUksWUFBWTtDQUNmOztBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7O0FBR0Q7SUFDSSw4QkFBOEI7O0NBRWpDOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osNERBQTREO0lBQzVELGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHVEQUF1RDtJQUN2RCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDREQUE0RDtJQUM1RCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztDQUNoRDs7QUFFRCxPQUFPOztBQUNQLDJEQUEyRDs7QUFDM0QsdUJBQXVCOztBQUN2Qiw2QkFBNkI7O0FBQzdCLEtBQUs7O0FBQ0w7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQsK0JBQStCOztBQUMvQixlQUFlOztBQUNmLCtCQUErQjs7QUFDL0IsU0FBUzs7QUFFVCxzQkFBc0I7O0FBRXRCLHlDQUF5Qzs7QUFDekMsa0JBQWtCOztBQUNsQixvQkFBb0I7O0FBQ3BCLEtBQUs7O0FBRUwscUJBQXFCOztBQUNyQixpQ0FBaUM7O0FBQ2pDLHVCQUF1Qjs7QUFDdkIsd0JBQXdCOztBQUN4QiwyQkFBMkI7O0FBQzNCLEtBQUsiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53aG9sZWxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbjogN2VtIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyNDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTFweCAzNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG59XHJcblxyXG4uc2lnbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGNvbG9yOiAjOEM1NUFBO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi51biB7XHJcbiAgICB3aWR0aDogNzYlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAxMjYsIDAuMDQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb3JtLmZvcm0xIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5mbG9hdExlZnRcclxue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnBhc3Mge1xyXG4gICAgd2lkdGg6IDc2JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEyNiwgMTI2LCAwLjA0KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG5cclxuXHJcbi51bjpmb2N1cywgLnBhc3M6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNWVtOyovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOUMyN0IwLCAjRTA0MEZCKTsqL1xyXG4gICAgLypib3JkZXI6IDA7Ki9cclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLypmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7Ki9cclxuICAgIG1hcmdpbi1sZWZ0OiAxMSU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2NmUyYWQ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLypjb2xvcjogd2hpdGU7Ki9cclxuICAgIC8qcGFkZGluZzogMjBweDsqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyptYXJnaW46IDRweCAycHg7Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gICAgLyp0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEyKTsqL1xyXG4gICAgLypjb2xvcjogI0UxQkVFNzsqL1xyXG4gICAgLypwYWRkaW5nLXRvcDogMTVweDsqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNWVtO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzlDMjdCMCwgI0UwNDBGQik7Ki9cclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLypmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7Ki9cclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxuLyphIHsqL1xyXG4vKiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEyKTsqL1xyXG4vKiAgICBjb2xvcjogI0UxQkVFNzsqL1xyXG4vKiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUqL1xyXG4vKn0qL1xyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLypAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsqL1xyXG4vKiAgICAubWFpbiB7Ki9cclxuLyogICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDsqL1xyXG4vKiAgICB9Ki9cclxuXHJcbi8qZm9udCBhd2Vzb21lIGljb25zKi9cclxuXHJcbi8qLm1pbi1jb250YWluZXIgLmNhcmQtcGFuZWwgZm9ybSAuZmEgeyovXHJcbi8qICAgIHRvcDogMTNweDsqL1xyXG4vKiAgICByaWdodDogMXJlbTsqL1xyXG4vKn0qL1xyXG5cclxuLyouZm9ybS1ncm91cCBhIGkgeyovXHJcbi8qICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTsqL1xyXG4vKiAgICBtYXJnaW46IDAgYXV0bzsqL1xyXG4vKiAgICBmb250LXNpemU6IDVyZW07Ki9cclxuLyogICAgZm9udC1zdHlsZTogbm9ybWFsOyovXHJcbi8qfSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wholelogin\">\n  <p class=\"sign\" align=\"center\" style=\"color: white;\">Login</p>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\" style=\"margin-top: 35px;\">\n    <div>\n      <input class=\"un\" id=\"username\" placeholder=\"User name\" type=\"text\" align=\"center\" formControlName=\"userName\" #userName>\n      <i class=\"fa fa-user fa-lg position-absolute\" style=\"font-size: 21px; margin-left: -30px; color:white; display: inline-block;vertical-align: bottom; height: 5px; margin-top: 10px;\"></i>\n    </div>\n    <div>\n      <input  class=\"pass\" id=\"password\" placeholder=\"Password\" type=\"password\" align=\"center\" formControlName=\"password\" #password>\n      <i class=\"fa fa-lock fa-lg position-absolute\" style=\"font-size: 21px; margin-left: -30px;display:inline-block; color:white; vertical-align: bottom; margin-top: 11px;\"></i>\n    </div>\n    <div style=\"margin-top: 20px;\">\n      <button type=\"submit\" class=\"submit floatLeft\">Login</button>\n    </div>\n    <div>\n      <button class=\"submit\" [routerLink]=\"['/users']\">New user?</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log('form:', form);
        console.log('in form submit method');
        this.userName = this.username.nativeElement.value;
        console.log('username', this.username);
        this.passWord = this.password.nativeElement.value;
        console.log('password', this.passWord);
        this.api.getUser(this.userName)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (data.userName.match(_this.userName) === null && data.passWord.match(_this.passWord) === null) {
                console.log('inside if');
            }
            else {
                console.log('in else');
                localStorage.setItem('name', _this.userName);
                _this.router.navigate(['/tourist']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formstyle{\r\n    font-size: 20px;\r\n    background-color: black;\r\n    width: 800px;\r\n    height: 430px;\r\n    margin: 7em auto;\r\n    margin-top: 240px !important;\r\n    border-radius: 1.5em;\r\n    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);\r\n}\r\n.signe {\r\n    padding-top: 40px;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 23px;\r\n}\r\n.first{\r\n    margin-top: 20px;\r\n    margin-left: 116px;\r\n    /*width: 76%;*/\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.second\r\n{\r\n    margin-top:20px;\r\n    margin-left: 155px;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.third{\r\n    margin-left: 116px;\r\n    margin-top: 30px;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.fourth{\r\n    margin-left: 155px;\r\n    margin-top: 30px;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.fifth{\r\n    margin-left: 116px;\r\n    margin-top: 30px;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.six\r\n{\r\n    margin-left: 155px;\r\n    margin-top: 30px;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.seven\r\n{\r\n    margin-left: 116px;\r\n    margin-top: 30px;\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    /*margin-bottom: 50px;*/\r\n    /*margin-left: 46px;*/\r\n    text-align: center;\r\n    /*margin-bottom: 27px;*/\r\n    /*font-family: 'Ubuntu', sans-serif;*/\r\n}\r\n.signup{\r\n    position: absolute;\r\n    margin-top: -30px;\r\n    margin-left:  50%;\r\n    background-color: #866e2ad4;\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: 12px;\r\n    width: 11%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtEQUFrRDtDQUNyRDtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQ0FBc0M7Q0FDekM7QUFDRDs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHNDQUFzQztDQUN6QztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHNDQUFzQztDQUN6QztBQUNEOztJQUVJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsc0NBQXNDO0NBQ3pDO0FBQ0Q7O0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jtc3R5bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICBtYXJnaW46IDdlbSBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjQwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDExcHggMzVweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxufVxyXG4uc2lnbmUge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4uZmlyc3R7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExNnB4O1xyXG4gICAgLyp3aWR0aDogNzYlOyovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAxMjYsIDEyNiwgMC4wNCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogNTBweDsqL1xyXG4gICAgLyptYXJnaW4tbGVmdDogNDZweDsqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyptYXJnaW4tYm90dG9tOiAyN3B4OyovXHJcbiAgICAvKmZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjsqL1xyXG59XHJcbi5zZWNvbmRcclxue1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAxMjYsIDAuMDQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDUwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ2cHg7Ki9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogMjdweDsqL1xyXG4gICAgLypmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7Ki9cclxufVxyXG4udGhpcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAxMjYsIDAuMDQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDUwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ2cHg7Ki9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogMjdweDsqL1xyXG4gICAgLypmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7Ki9cclxufVxyXG4uZm91cnRoe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEyNiwgMTI2LCAwLjA0KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgLyptYXJnaW4tYm90dG9tOiA1MHB4OyovXHJcbiAgICAvKm1hcmdpbi1sZWZ0OiA0NnB4OyovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDI3cHg7Ki9cclxuICAgIC8qZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmOyovXHJcbn1cclxuLmZpZnRoe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEyNiwgMTI2LCAwLjA0KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgLyptYXJnaW4tYm90dG9tOiA1MHB4OyovXHJcbiAgICAvKm1hcmdpbi1sZWZ0OiA0NnB4OyovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDI3cHg7Ki9cclxuICAgIC8qZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmOyovXHJcbn1cclxuLnNpeFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTU1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAxMjYsIDAuMDQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDUwcHg7Ki9cclxuICAgIC8qbWFyZ2luLWxlZnQ6IDQ2cHg7Ki9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogMjdweDsqL1xyXG4gICAgLypmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7Ki9cclxufVxyXG4uc2V2ZW5cclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEyNiwgMTI2LCAwLjA0KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgLyptYXJnaW4tYm90dG9tOiA1MHB4OyovXHJcbiAgICAvKm1hcmdpbi1sZWZ0OiA0NnB4OyovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKm1hcmdpbi1ib3R0b206IDI3cHg7Ki9cclxuICAgIC8qZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmOyovXHJcbn1cclxuLnNpZ251cHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6ICA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY2ZTJhZDQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiAxMSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <form class=\"formstyle\"  [formGroup]=\"registrationForm\" (ngSubmit)=\"onFormSubmit(registrationForm.value)\" method=\"post\">\n    <p class=\"signe\" align=\"center\" >Registration</p>\n    <div class=\"row\">\n      <input  class=\"first\" type=\"text\" id=\"firstName\" placeholder=\"Firstname\" formControlName=\"firstName\">\n\n      <input class=\"second\" type=\"text\" id=\"lastName\" placeholder=\"Lastname\" formControlName=\"lastName\">\n    </div>\n    <div class=\"row\">\n      <input class=\"third\" type=\"text\" id=\"userName\" placeholder=\"Username\" formControlName=\"userName\">\n      <input class=\"fourth\" type=\"text\" id=\"emailId\" placeholder=\"Email\" formControlName=\"emailId\">\n    </div>\n    <div class=\"row\">\n      <input  class=\"fifth\" type=\"password\" id=\"password\" placeholder=\"password\" formControlName=\"password\">\n      <input class=\"six\" type=\"password\" id=\"reEnterPassword\" placeholder=\"Re enter Password\" formControlName=\"reEnterPassword\">\n    </div>\n    <div class=\"row\">\n      <input  class=\"seven\" type=\"text\" id=\"phoneNumber\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\">\n    </div>\n\n    <button class=\"signup\" type=\"submit\">Sign Up</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.emailId = '';
        this.password = '';
        this.reEnterPassword = '';
        this.phoneNumber = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'emailId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'reEnterPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'phoneNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    RegistrationComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postUser(form)
            .subscribe(function (res) {
            console.log('res', res);
            //const userName = res['userName'];
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container{\r\n  position: relative;\r\n}\r\n\r\n.button {\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  padding: 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  border-radius: 12px;\r\n  width: 100px;\r\n  margin-top: -35px;\r\n}\r\n\r\ni.fa-cutlery{\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 230px;\r\n  color: black;\r\n  height: 10px;\r\n  width: 10px;\r\n  font-size: 26px;\r\n}\r\n\r\n.panel-body{\r\n  height: 560px;\r\n  overflow: auto;\r\n}\r\n\r\n.container{\r\n  margin-top: 40px;\r\n}\r\n\r\ni.fa-map-marker{\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 86%;\r\n  color: black;\r\n  height: 10px;\r\n  width: 10px;\r\n  font-size: 32px;\r\n}\r\n\r\n.input-field{\r\n  border-radius : 4px;\r\n  height : 45px;\r\n  color: black;\r\n}\r\n\r\n.parent-container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n  margin-top: 110px;\r\n}\r\n\r\n.child-container {\r\n  color: white;\r\n  text-align: center;\r\n  position: center;\r\n\r\n}\r\n\r\n.desc {\r\n  font-family: Georgia;\r\n  font-size: 17px;\r\n}\r\n\r\n.thumbnail {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\r\n  transition: 0.3s;\r\n  min-width: 40%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.thumbnail-description {\r\n  min-height: 40px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlY2lwZS9zZWFyY2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7O0FBR0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjs7Q0FFbEI7O0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsMkNBQTJDO0VBQzNDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBDQUEwQztDQUMzQyIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZWNpcGUvc2VhcmNoLXJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbn1cclxuXHJcbmkuZmEtY3V0bGVyeXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogMjMwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLnBhbmVsLWJvZHl7XHJcbiAgaGVpZ2h0OiA1NjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuaS5mYS1tYXAtbWFya2Vye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA4NiU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZHtcclxuICBib3JkZXItcmFkaXVzIDogNHB4O1xyXG4gIGhlaWdodCA6IDQ1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLnBhcmVudC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMTBweDtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG5cclxufVxyXG4uZGVzYyB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtaW4td2lkdGg6IDQwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwtZGVzY3JpcHRpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWw6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\r\n  <div class=\"child-container\">\r\n    <h2><b>Food Cravings???\r\n    </b></h2><br>\r\n    <form [formGroup]=\"searchRecipeForm\" ]>\r\n      <div class=\"form-group\" >\r\n        <div class=\"form-group col-lg-6 col-lg-offset-3 input-group\" style=\"float: left\">\r\n          <div class=\"input-container\" style=\"float: left; font-size: 24px;\">\r\n            <i class=\"fa fa-cutlery\"></i>\r\n            <input class=\"input-field\" type=\"text\" placeholder=\"Recipe name\" style=\"width: 260px; margin-top:-8px\" #recipe>\r\n          </div>\r\n          <div class=\"input-container\" style=\"margin-left: 48%; font-size: 24px;\">\r\n            <i class=\"fa fa-map-marker\"></i>\r\n            <input class=\"input-field\" type=\"text\" placeholder=\"Place\" style=\"width: 260px; margin-top:-8px\" #place>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <button (click)=\"getVenues()\" class=\"btn btn primary col-lg-2 col-lg-offset-5  button\" type=\"button\"><b>Hit Me !!!</b></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div><br><br>\r\n<div class=\"container\" *ngIf=\"recipeList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"panel panel-default col-6\">\r\n        <div class=\"panel-heading\" style=\"background-color: #4CAF50; color: white\"><b>How to make?</b></div>\r\n        <div class=\"panel-body\">\r\n          <div *ngFor=\"let recipe of recipeList\" class=\"list-group-item clearfix\">\r\n            <div class=\"pull-left\">\r\n              <h4 class=\"list-group-item-heading\">{{ recipe.recipe.label }}</h4>\r\n              <a href=\"{{recipe.recipe.url}}\" class=\"list-group-item-text\">{{ recipe.recipe.url }}</a>\r\n              <p>{{recipe.recipe.source}}</p>\r\n              <p *ngFor=\"let ingredient of ingredientLines\">\r\n                <span>{{ingredient}}</span>\r\n              </p>\r\n            </div>\r\n\r\n            <span class=\"pull-right\">\r\n          <img src=\"{{recipe.recipe.image}}\" style=\"width: 70px; height: 50px;\" align=\"center\"/>\r\n\r\n      </span>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"panel panel-default col-6\">\r\n        <div class=\"panel-heading\" style=\"background-color: #4CAF50; color: white\"><b>Where to get?</b></div>\r\n        <div class=\"panel-body\">\r\n\r\n          <div *ngFor=\"let venue of venueList\" class=\"list-group-item clearfix\">\r\n            <div class=\"pull-left\">\r\n              <h4 class=\"list-group-item-heading\">{{ venue.name }}</h4>\r\n              <p>{{venue.location.formattedAddress[0]}}</p>\r\n              <p>{{venue.location.formattedAddress[1]}}</p>\r\n              <p>{{venue.location.formattedAddress[2]}}</p>\r\n            </div>\r\n\r\n            <span class=\"pull-right\">\r\n             <a href=\"http://maps.google.com/maps?saddr={{currentLat}},{{currentLong}}\r\n             &daddr={{venue.location.formattedAddress[0]}},{{venue.location.formattedAddress[1]}},{{venue.location.formattedAddress[2]}}\">\r\n               <img src=\"../../assets/google.png\" style=\"width: 30px; height: 30px;\"></a>\r\n      </span>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRecipeComponent", function() { return SearchRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchRecipeComponent = /** @class */ (function () {
    function SearchRecipeComponent(http) {
        this.http = http;
        this.clientId = 'VUDK4HAUOT5H3F0ZUSREVWUK13FXM21BAG5O3ADZFDWHGHP1';
        this.clientSecret = 'R4UI1P41LLT4FB5IPUUBQI0EAFCIMK1PDVYYVRYWJHTPTXBO';
        this.app_id = '783dd51f';
        this.app_key = 'c832939218ef631f18ec8087c3c4a2d3';
    }
    SearchRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.navigator.geolocation.getCurrentPosition(function (position) {
            _this.geolocationPosition = position;
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
        });
    };
    SearchRecipeComponent.prototype.getVenues = function () {
        var _this = this;
        window.navigator.geolocation.getCurrentPosition(function (position) {
            _this.geolocationPosition = position;
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
        });
        this.recipeValue = this.recipes.nativeElement.value;
        this.placeValue = this.places.nativeElement.value;
        console.log('lat', this.currentLat);
        if (this.recipeValue !== null) {
            // tslint:disable-next-line:max-line-length
            var url = 'https://api.foursquare.com/v2/venues/search?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&v=20190425&ll=' + this.currentLat + ',' + this.currentLong + '&intent=checkin&radius=10000&query=' + this.recipeValue + '&near=' + this.placeValue;
            this.http.get(url).subscribe(function (resp) {
                _this.venueList = resp["response"];
                _this.venueList = _this.venueList["venues"];
                console.log('returned json is', _this.venueList);
            });
            var url1 = 'https://api.edamam.com/search?q=' + this.recipeValue + '&app_id=' + this.app_id + '&app_key=' + this.app_key;
            this.http.get(url1).subscribe(function (resp1) {
                _this.recipeList = resp1["hits"];
                /*this.recipeList.map(oneRecipe =>{
                 console.log('one recipe', oneRecipe);
                  const recipe = {
                    ingredients: oneRecipe["recipe"]["ingredientLines"].slice(0,4)
                  }
                  console.log('lines', recipe.ingredients);
                  this.ingredientLines.push(recipe.ingredients);
                })
                console.log('ingredient');*/
                console.log('returned json is edamam : ', _this.recipeList);
            });
        }
        if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recipe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "recipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('place'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "places", void 0);
    SearchRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-recipe',
            template: __webpack_require__(/*! ./search-recipe.component.html */ "./src/app/search-recipe/search-recipe.component.html"),
            styles: [__webpack_require__(/*! ./search-recipe.component.css */ "./src/app/search-recipe/search-recipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchRecipeComponent);
    return SearchRecipeComponent;
}());



/***/ }),

/***/ "./src/app/tourist-guide.service.ts":
/*!******************************************!*\
  !*** ./src/app/tourist-guide.service.ts ***!
  \******************************************/
/*! exports provided: TouristGuideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristGuideService", function() { return TouristGuideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TouristGuideService = /** @class */ (function () {
    function TouristGuideService(http) {
        this.http = http;
        this.googleAPIKey = 'AIzaSyCoxh7yi4R1zPaauMicbkDMYOFbRl47fG4';
    }
    TouristGuideService.prototype.getTouristPlaces = function (place) {
        var _this = this;
        var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' +
            'query=' + place + '+point+of+interest&language=en&key=' + this.googleAPIKey;
        this.http.get('https://cors-anywhere.herokuapp.com/' + url).subscribe(function (resp) {
            console.log('returned json place id is', resp['results']);
            _this.touristPlaces = resp['results'];
            console.log('places array', _this.touristPlaces);
            return _this.touristPlaces;
        });
    };
    TouristGuideService.prototype.getPlaceId = function (place) {
        var _this = this;
        console.log('place', place);
        var placeUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + place + '&inputtype=textquery&key=' + this.googleAPIKey;
        console.log('placeid url is', placeUrl);
        this.http.get('https://cors-anywhere.herokuapp.com/' + placeUrl).subscribe(function (resp) {
            _this.candidates = resp['candidates'];
            _this.placeId = resp['candidates'][0].place_id;
            console.log('candidates', _this.candidates);
            console.log('returned json place id is', resp);
            console.log('placeid:', resp['candidates'][0].place_id);
            var reviewsUrl = 'https://maps.googleapis.com/maps/api/place/details/json?key=' + _this.googleAPIKey + '&placeid=' + _this.placeId;
            console.log('review url', reviewsUrl);
            _this.http.get('https://cors-anywhere.herokuapp.com/' + reviewsUrl).subscribe(function (resp1) {
                console.log('returned json reviews is', resp1);
            });
        });
    };
    TouristGuideService.prototype.getReviews = function () {
        var reviewsUrl = 'https://maps.googleapis.com/maps/api/place/details/' +
            'json?key=' + this.googleAPIKey + '&placeid=' + this.placeId;
        console.log('review url', reviewsUrl);
        this.http.get('https://cors-anywhere.herokuapp.com/' + reviewsUrl).subscribe(function (resp) {
            console.log('returned json reviews is', resp);
        });
    };
    TouristGuideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TouristGuideService);
    return TouristGuideService;
}());



/***/ }),

/***/ "./src/app/tourist-guide/tourist-guide.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tourist-guide/tourist-guide.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loopdiv{\r\n    height: 600px;\r\n    overflow: auto;\r\n    width: 60%;\r\n    margin-top: 91px;\r\n}\r\n.reviewsDiv{\r\n    width: 30%;\r\n    overflow: auto;\r\n    height: 600px;\r\n    background-color: black;\r\n    margin-top: 128px;\r\n    padding: 20px;\r\n    margin-left: 68%;\r\n    border-radius: 44px;\r\n}\r\n.card{\r\n    background-color: black;\r\n    border-radius: 20px;\r\n}\r\n.places{\r\n    margin-bottom: 10px;\r\n    height: 200px;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 12px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\r\n}\r\n.myHeading{\r\n    color: black;\r\n    margin-left: 36%;\r\n}\r\n.hitme{\r\n    margin-top: -67px;\r\n    margin-left: 58%;\r\n    background-color: #866e2ad4;\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    /*margin: 4px 2px;*/\r\n    border-radius: 12px;\r\n    width: 6%;\r\n}\r\n.first{\r\n    color: black;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    background: rgba(136, 126, 126, 0.04);\r\n    padding: 10px 20px;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    border: 1px solid;\r\n    text-align: center;\r\n}\r\n.guideform{\r\n    margin-top: 80px;\r\n    margin-left: -37%;\r\n    width: 175%;\r\n}\r\n.stylemarker{\r\n    position: absolute;\r\n    margin-left: 24%;\r\n    margin-top: 10px;\r\n    color: black;\r\n}\r\n.lbl{\r\n    width: 100px;\r\n}\r\n.lblans{\r\n    width: 66%;\r\n}\r\n.welcome{\r\n    position: fixed;\r\n    color: white;\r\n    margin-top: -135px;\r\n    margin-left: 67%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cmlzdC1ndWlkZS90b3VyaXN0LWd1aWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLGtEQUFrRDtJQUNsRCxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixrREFBa0Q7Q0FDckQ7QUFFRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFVBQVU7Q0FDYjtBQUVEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdG91cmlzdC1ndWlkZS90b3VyaXN0LWd1aWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9vcGRpdntcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xyXG59XHJcbi5yZXZpZXdzRGl2e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMTI4cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY4JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wbGFjZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLm15SGVhZGluZ3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzNiU7XHJcbn1cclxuXHJcbi5oaXRtZXtcclxuICAgIG1hcmdpbi10b3A6IC02N3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjZlMmFkNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvKm1hcmdpbjogNHB4IDJweDsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiA2JTtcclxufVxyXG5cclxuLmZpcnN0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAxMjYsIDAuMDQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ndWlkZWZvcm17XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNyU7XHJcbiAgICB3aWR0aDogMTc1JTtcclxufVxyXG5cclxuLnN0eWxlbWFya2Vye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sYmx7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sYmxhbnN7XHJcbiAgICB3aWR0aDogNjYlO1xyXG59XHJcblxyXG4ud2VsY29tZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0xMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NyU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tourist-guide/tourist-guide.component.html":
/*!************************************************************!*\
  !*** ./src/app/tourist-guide/tourist-guide.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child-container\">\n  <h2 class=\"myHeading\"><b>Tourist Places Finder\n  </b></h2><br>\n  <h4 class=\"welcome\"><b>Welcome {{name}}</b></h4>\n  <form [formGroup]=\"touristForm\" class=\"guideform\">\n    <div class=\"form-group\">\n      <div class=\"form-group col-lg-6 col-lg-offset-3 input-group\" style=\"float: left\">\n        <!--<div class=\"input-container\" style=\"float: left; font-size: 24px;\">\n          <i class=\"fa fa-cutlery\"></i>\n          <input class=\"input-field\" type=\"text\" placeholder=\"Recipe name\" style=\"width: 260px; margin-top:-8px\" #recipe>\n        </div>-->\n        <div class=\"input-container\" style=\"font-size: 24px; margin-left:34%;\">\n          <i class=\"fa fa-map-marker stylemarker\"></i>\n          <input class=\"first\" type=\"text\" placeholder=\"Place\" style=\"width: 260px;\" #place id=\"place\">\n        </div>\n      </div>\n      <br>\n      <div>\n        <button (click)=\"getTouristPlaces()\" class=\"btn btn primary col-lg-2 col-lg-offset-5  button hitme\" type=\"button\"><b>Hit Me !!!</b></button>\n      </div>\n      <div class=\"loopdiv\" style=\"float: left\">\n      <div *ngFor=\"let tplace of touristPlaces\" style=\"color: white\" class=\"col-lg-4\">\n        <div class=\"card places\">\n        <input type=\"text\" style=\"display: none\" #place_id id=\"place_id\" value=\"{{tplace.place_id}}\">\n          <input type=\"text\" style=\"display: none\" #place_name_hid id=\"place_name_hid\" value=\"{{tplace.name}}\">\n          <div class=\"card-body\">\n            <h4 (click)=\"getReviews(place_id.value, place_name_hid.value)\" class=\"card-title\"><a><b><u>{{tplace.name}}</u></b></a></h4>\n            <input type=\"text\" style=\"display: none\" #place_name id=\"place_name\" value=\"{{tplace.name}}\">\n\n            <span class=\"card-text\"><label class=\"lbl\">Address:</label> <label class=\"lblans\">{{tplace.formatted_address}}</label></span>\n            <!--<span> {{tplace.opening_hours.open_now}}</span>-->\n            <span class=\"card-text\"><label class=\"lbl\">Ratings:</label><label class=\"lblans\">{{tplace.user_ratings_total}}</label></span>\n            <br>\n            <label class=\"lbl\">Types:</label>\n            <span *ngFor=\"let type of tplace.types\" class=\"lblans\">\n              <span class=\"card-text lblans\">{{type}}</span>\n            </span>\n          </div>\n        </div>\n      </div>\n      </div>\n      <div class=\"reviewsDiv\" *ngIf=\"reviews\">\n        <div style=\"margin-left: 81%;\">\n          <img src=\"{{photos}}\" height=\"100px\" width=\"100px\">\n        </div>\n        <h3 style=\"color: white; margin-top: -87px;\">Reviews</h3>\n        <div *ngFor=\"let review of reviews\" style=\"color: white; margin-bottom: 50px;\">\n          <span><label class=\"lbl\">Name:</label><label>{{review.author_name}}</label></span><br>\n          <span><label class=\"lbl\">Ratings:</label><label> {{review.rating}}</label></span><br>\n          <span><label class=\"lbl\">Time:</label><label>{{review.relative_time_description}}</label></span><br>\n          <span>{{review.text}}</span><br>\n          <span>{{review.author_url}}</span>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/tourist-guide/tourist-guide.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tourist-guide/tourist-guide.component.ts ***!
  \**********************************************************/
/*! exports provided: TouristGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristGuideComponent", function() { return TouristGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tourist_guide_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tourist-guide.service */ "./src/app/tourist-guide.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var TouristGuideComponent = /** @class */ (function () {
    function TouristGuideComponent(touristSrvc, formBuilder, http) {
        this.touristSrvc = touristSrvc;
        this.formBuilder = formBuilder;
        this.http = http;
        this.googleAPIKey = 'AIzaSyCoxh7yi4R1zPaauMicbkDMYOFbRl47fG4';
        this.name = localStorage.getItem('name');
        console.log('name', this.name);
    }
    TouristGuideComponent.prototype.ngOnInit = function () {
        this.touristForm = this.formBuilder.group({
            'place': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    TouristGuideComponent.prototype.onFormSubmit = function (form) {
    };
    TouristGuideComponent.prototype.getTouristPlaces = function () {
        var _this = this;
        this.place = this.places.nativeElement.value;
        var they = this;
        var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' +
            'query=' + this.place + '+point+of+interest&language=en&key=' + this.googleAPIKey;
        this.http.get('https://cors-anywhere.herokuapp.com/' + url).subscribe(function (resp) {
            console.log('returned json place id is', resp['results']);
            console.log('place name', _this.placeName);
            _this.touristPlaces = resp['results'];
            return _this.touristPlaces;
        });
    };
    TouristGuideComponent.prototype.getPhotos = function (placeName) {
        var _this = this;
        var urlp = 'https://pixabay.com/api/?key=17306518-3a8752f8be0a577aebefa8f1e&q=' + placeName + '&image_type=photo';
        this.http.get('https://cors-anywhere.herokuapp.com/' + urlp).subscribe(function (resp) {
            console.log('resp', resp);
            console.log('returned json photos is', JSON.parse(JSON.stringify(resp['hits'][0])).previewURL);
            var he = JSON.parse(JSON.stringify(resp['hits'][0])).previewURL;
            _this.photos = he;
            return he;
        });
    };
    TouristGuideComponent.prototype.getReviews = function (placeId, placepName) {
        var _this = this;
        this.getPhotos(placepName);
        var reviewsUrl = 'https://maps.googleapis.com/maps/api/place/details/' +
            'json?key=' + this.googleAPIKey + '&placeid=' + placeId;
        console.log('review url', reviewsUrl);
        this.http.get('https://cors-anywhere.herokuapp.com/' + reviewsUrl).subscribe(function (resp) {
            console.log('returned json reviews is', resp);
            console.log('reviews', resp['result']);
            _this.reviews = resp['result']['reviews'];
            console.log('reviews', _this.reviews);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('place'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TouristGuideComponent.prototype, "places", void 0);
    TouristGuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tourist-guide',
            template: __webpack_require__(/*! ./tourist-guide.component.html */ "./src/app/tourist-guide/tourist-guide.component.html"),
            styles: [__webpack_require__(/*! ./tourist-guide.component.css */ "./src/app/tourist-guide/tourist-guide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tourist_guide_service__WEBPACK_IMPORTED_MODULE_2__["TouristGuideService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TouristGuideComponent);
    return TouristGuideComponent;
}());



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

module.exports = __webpack_require__(/*! C:\Users\nikhi\Desktop\Eswar\web\Web_ICP6\Web_Lesson6\ICE-MashUp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map