(self["webpackChunkgescabinet"] = self["webpackChunkgescabinet"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guard/is-authenticated.guard */ 30615);
/* harmony import */ var _core_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/models/role */ 38252);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







const routes = [
    {
        path: "",
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__.MainLayoutComponent,
        children: [
            { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
            {
                path: "admin",
                data: {
                    role: [_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.SUPERADMIN, _core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.ADMIN],
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then((m) => m.AdminModule),
                canActivate: [_core_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticatedGuard]
            },
            {
                path: "doctor",
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.MEDECIN,
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-8fa89f"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js-node_modules_angular_-a1eaaa"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js-src_app_core_service_toas-5790cd"), __webpack_require__.e("src_app_doctor_doctor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./doctor/doctor.module */ 96520)).then((m) => m.DoctorModule),
                canActivate: [_core_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticatedGuard]
            },
            {
                path: "patient",
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.PATIENT,
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js-node_modules_angular_-a1eaaa"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js-src_app_core_service_toas-5790cd"), __webpack_require__.e("src_app_patient_patient_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./patient/patient.module */ 72158)).then((m) => m.PatientModule),
                canActivate: [_core_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticatedGuard]
            },
            {
                path: "contacts",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-8fa89f"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_ngx-material-file-input___ivy_ngcc___fesm2015_ngx-material-file-input_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js-node_modules_angular_-a1eaaa"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js-node_modules_angular_mate-cd6ae6"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 6808)).then((m) => m.ContactsModule),
            },
            {
                path: "charts",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("default-node_modules_ngx-echarts___ivy_ngcc___fesm2015_ngx-echarts_js"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 55108)).then((m) => m.ChartsModule),
            },
            {
                path: "icons",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons/icons.module */ 74115)).then((m) => m.IconsModule),
            }
        ],
    },
    {
        path: "authentication",
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 95593);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);






class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.spinner.show();
                // location.onPopState(() => {
                //   window.location.reload();
                // });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf("/") + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-click-outside */ 74191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 19699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);





















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, "assets/i18n/", ".json");
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule.forRoot({
                progressBar: true,
                progressAnimation: 'increasing',
                timeOut: 2000
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_9__.ClickOutsideModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient],
                },
            }),
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__.MainLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_9__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, 
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: false,
                variant: "light",
                theme_color: "white",
                logo_bg_color: "white",
                sidebar: {
                    collapsed: false,
                    backgroundColor: "light", // options:  light & dark
                },
            },
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 74930);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth.service */ 41782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 77431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class CoreModule {
    constructor() {
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_2__.DynamicScriptLoaderService,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] }); })();


/***/ }),

/***/ 30615:
/*!******************************************************!*\
  !*** ./src/app/core/guard/is-authenticated.guard.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedGuard": function() { return /* binding */ IsAuthenticatedGuard; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 99922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class IsAuthenticatedGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        this.authService.autoLogin();
        return this.authService.isLogged.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(isLogged => {
            if (!isLogged) {
                this.router.navigate(["/authentication/signin"]); //Retour à la page login
            }
        }));
    }
}
IsAuthenticatedGuard.ɵfac = function IsAuthenticatedGuard_Factory(t) { return new (t || IsAuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
IsAuthenticatedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IsAuthenticatedGuard, factory: IsAuthenticatedGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38252:
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; }
/* harmony export */ });
var Role;
(function (Role) {
    //Roles
    Role["SUPERADMIN"] = "Role_SUPERADMIN";
    Role["ADMIN"] = "Role_ADMIN";
    Role["MEDECIN"] = "Role_MEDECIN";
    Role["PATIENT"] = "Role_PATIENT";
})(Role || (Role = {}));


/***/ }),

/***/ 75996:
/*!***************************************************************!*\
  !*** ./src/app/core/service/api-services/rest-api.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestApiService": function() { return /* binding */ RestApiService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/**
 *
 * REST API for Cabinet medicale
 * Powered By
 *  Sogodogo - Tiémoko
 *    e-mail : tiemogosogodogo94@gmail.com
 *    github : github.com/tieckby
 *
 * Fofana - Hady
 *    e-mail : hadyfofana72@gmail.com
 *    github : github.com/hedycarter
 *
 *
 */




class RestApiService {
    constructor(http) {
        this.http = http;
        this.userLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiLink + '/gescab_db/api/v1/personne';
        this.riveLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiLink + '/gescab_db/api/v1/rive';
        this.cabinetMedicaleLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiLink + '/gescab_db/api/v1/cabinetMedicale';
        this.specialityLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiLink + '/gescab_db/api/v1/specialite';
        this.rdvLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiLink + '/gescab_db/api/v1/rdv';
    }
    //Set Header
    setHeader(authorization, token) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set(authorization, 'token:' + token);
    }
    /**_______________________________Section User___________________________________**/
    //Add new user
    addNewUser(userBody) {
        return this.http.post(this.userLink + '/add', userBody, { responseType: 'text' });
    }
    //Change user Password
    changeUserPassword(username, password) {
        return this.http.get(this.userLink + '/changePassword/' + username + '/' + password, { responseType: 'text' });
    }
    //Send email
    sendEmailToUser(email) {
        return this.http.get(this.userLink + '/sendEmail/' + email, { responseType: 'text' });
    }
    //Set User Statut
    setUserStatut(idUser, etat, token) {
        return this.http.get(this.userLink + '/setStatut/' + idUser + '/' + etat, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    //Get User by username
    getPersonByUsername(username, token) {
        return this.http.get(this.userLink + '/getByUsername/' + username, { headers: this.setHeader('Authorization', token) });
    }
    //Get User email
    getPersonEmail(email) {
        return this.http.get(this.userLink + '/getEmail/' + email, { responseType: 'text' });
    }
    //Get User username
    getPersonUsername(username) {
        return this.http.get(this.userLink + '/getUsername/' + username, { responseType: 'text' });
    }
    //Get User telephone
    getPersonTelephone(telephone) {
        return this.http.get(this.userLink + '/getTelephone/' + telephone, { responseType: 'text' });
    }
    //Get User by Profile
    getUserByProfile(profile, token) {
        return this.http.get(this.userLink + '/getByProfile/' + profile, { headers: this.setHeader('Authorization', token) });
    }
    //Update User
    updateUser(userId, userBody, token) {
        return this.http.put(this.userLink + '/update/' + userId, userBody, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    //Delete User by ID
    deleteUser(userId, token) {
        return this.http.delete(this.userLink + '/delete/' + userId, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    //Update user profile
    updateUserProfile(username, image, token) {
        const formData = new FormData();
        formData.append("file", image, image.name);
        return this.http.post(this.userLink + '/uploadImg/' + username, formData, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    /**_______________________________Section Rive___________________________________**/
    //Get all rives
    getAllRive() {
        return this.http.get(this.riveLink + '/getAll');
    }
    /**_______________________________Section Cabinet medicale___________________________________**/
    //Get Cabinet by ID
    getCabinetByID(id) {
        return this.http.get(this.cabinetMedicaleLink + '/getOne/' + id);
    }
    //Get all cabinets by rive
    getCabinetByRive(riveBody) {
        return this.http.post(this.cabinetMedicaleLink + '/getByRive', riveBody);
    }
    //GetAll Cabinet
    getAllCabinet() {
        return this.http.get(this.cabinetMedicaleLink + '/getAll');
    }
    //Get cabinet's specialities
    getCabinetSpecialities(cabinetBody) {
        return this.http.post(this.cabinetMedicaleLink + '/getSpecialities', cabinetBody);
    }
    //Get Cabinet's medecin
    getMedecinByCabinet(cabinetBody) {
        return this.http.post(this.userLink + '/getMedecinByCabinetMedicale', cabinetBody);
    }
    /**_______________________________Section RDV___________________________________**/
    //Take RDV
    takeRDV(rdvBody, token) {
        return this.http.post(this.rdvLink + '/add', rdvBody, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    //Update RDV
    updateRDV(id, rdvBody, token) {
        return this.http.put(this.rdvLink + '/update/' + id, rdvBody, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    deleteRDV(id, token) {
        return this.http.delete(this.rdvLink + '/delete/' + id, { headers: this.setHeader('Authorization', token), responseType: 'text' });
    }
    //Get all RDV
    getAllRDV(token) {
        return this.http.get(this.rdvLink + '/getAll', { headers: this.setHeader('Authorization', token) });
    }
    //Get RDV by Medecin
    getRDVByMedecin(postBody, token) {
        return this.http.post(this.rdvLink + '/getByMedecin', postBody, { headers: this.setHeader('Authorization', token) });
    }
    //Get RDV by Patient
    getRDVByPatient(postBody, token) {
        return this.http.post(this.rdvLink + '/getByPatient', postBody, { headers: this.setHeader('Authorization', token) });
    }
    //Get RDV by Medecin and Date
    getRDVByMedecinAndDate(currentDate, postBody, token) {
        return this.http.post(this.rdvLink + '/getByMedecinAndDate/' + currentDate, postBody, { headers: this.setHeader('Authorization', token) });
    }
    //Get RDV by Patient and Date
    getRDVByPatientAndDate(currentDate, postBody, token) {
        return this.http.post(this.rdvLink + '/getByPatientAndDate/' + currentDate, postBody, { headers: this.setHeader('Authorization', token) });
    }
    //Get distinct patient by medecin
    getDistinctPatientByMedecin(postBody, token) {
        return this.http.post(this.rdvLink + '/getDistinctPatient', postBody, { headers: this.setHeader('Authorization', token) });
    }
    //Get distinct patient by medecin and Date
    getDistinctPatientByMedecinAndDate(currentDate, postBody, token) {
        return this.http.post(this.rdvLink + '/getDistinctPatientAndDate/' + currentDate, postBody, { headers: this.setHeader('Authorization', token) });
    }
    //Valid a RDV
    validRDV(rdvId, isValid, token) {
        return this.http.get(this.rdvLink + '/validRDV/' + rdvId + '/' + isValid, { headers: this.setHeader('Authorization', token) });
    }
    //Get Upcoming RDV for the Patient
    upComingRDVForPatient(currentDate, body, token) {
        return this.http.post(this.rdvLink + '/getByPatientUpcomingRDV/' + currentDate, body, { headers: this.setHeader('Authorization', token) });
    }
    //Get Past RDV for the Patient
    pastRDVForPatient(currentDate, body, token) {
        return this.http.post(this.rdvLink + '/getByPatientPastRDV/' + currentDate, body, { headers: this.setHeader('Authorization', token) });
    }
}
RestApiService.ɵfac = function RestApiService_Factory(t) { return new (t || RestApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RestApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RestApiService, factory: RestApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 41782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-services/rest-api.service */ 75996);







class AuthService {
    constructor(http, router, restApi) {
        this.http = http;
        this.router = router;
        this.restApi = restApi;
        //Vérifie si l'utilisateur est connecté
        this._isLogged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.isLogged = this._isLogged.asObservable();
    }
    login(username, password) {
        const myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        body = body.set('username', username);
        body = body.set('password', password);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiLink}/login`, body, { headers: myheader }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
            //Store tokens
            localStorage.setItem("currentUserToken", JSON.stringify(user)); //On stocke les tokens dans le local storage
            localStorage.setItem("token", user['AccessToken']); //On stocke le token dans le local storage
            localStorage.setItem("refreshToken", user['refreshToken']); //On stocke le refresh token dans le local storage
            this._isLogged.next(true); //Connection réussie
            this.restApi.getPersonByUsername(username, localStorage.getItem("token")).subscribe(result => {
                this.currentUserData = result;
                localStorage.setItem("username", username);
                localStorage.setItem("userRole", this.currentUserData.roles[0]['name']);
            });
            return user;
        }));
    }
    autoLogin() {
        const userToken = localStorage.getItem("currentUserToken");
        const token = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("refreshToken");
        const username = localStorage.getItem("username");
        const userRole = localStorage.getItem("userRole");
        if (!userToken && !token && !refreshToken && !username && !userRole) //S'il n'ya pas de données dans le local storage
         {
            return this._isLogged.next(false);
        }
        this._isLogged.next(true);
    }
    logout() {
        localStorage.removeItem("currentUserToken"); ////On supprime le token dans le local storage
        localStorage.removeItem("token"); //On supprime le token dans le local storage
        localStorage.removeItem("refreshToken"); //On supprime le refresh token dans le local storage
        localStorage.removeItem("username"); //Supprime username
        localStorage.removeItem("userRole"); //Supprime userRole
        this._isLogged.next(false); //Déconnexion réussie
        this.router.navigate(["/authentication/signin"]); //Retour à la page login
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_1__.RestApiService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 77431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": function() { return /* binding */ ScriptStore; },
/* harmony export */   "DynamicScriptLoaderService": function() { return /* binding */ DynamicScriptLoaderService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: "Loaded" });
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 74930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": function() { return /* binding */ RightSidebarService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });


/***/ }),

/***/ 17050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": function() { return /* binding */ AuthLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": function() { return /* binding */ MainLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 20129);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 3, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);











const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    // cpteDemande: any;
    // public myAllRDV: any = new MatTableDataSource([]);
    constructor(document, renderer, elementRef, configService, authService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.configService = configService;
        this.authService = authService;
        this.config = {};
        this.isNavbarCollapsed = true;
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = localStorage.getItem("userRole");
        if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.SUPERADMIN || userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN) {
            this.homePage = "admin/dashboard/main";
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.PATIENT) {
            this.homePage = "patient/dashboard";
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.MEDECIN) {
            this.homePage = "doctor/dashboard";
        }
        else {
            this.homePage = "/authentication/signin";
        }
        // this.refreshList();
    }
    ngAfterViewInit() {
        if (localStorage.getItem("choose_logoheader")) {
            this.renderer.addClass(this.document.body, localStorage.getItem("choose_logoheader"));
        }
        else {
            this.renderer.addClass(this.document.body, "logo-" + this.config.layout.logo_bg_color);
        }
    }
    //Full Screen View pseudo code
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains("side-closed");
        if (hasClass) {
            this.renderer.removeClass(this.document.body, "side-closed");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
        else {
            this.renderer.addClass(this.document.body, "side-closed");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    // refreshList()
    // {
    //   this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
    //     {
    //       next: (result: any)=>{
    //         this.currentUser = result;
    //         console.log("userrrr", this.currentUser);
    //         if(this.currentUser.person_type == 'MEDECIN'){
    //           let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "MEDECIN"};
    //           //Get all RDV for the current medecin
    //           this.restApi.getRDVByMedecin(postBody, localStorage.getItem("token")).subscribe(
    //             {
    //               next: (result: any) =>{
    //                 for(let i=0; i<result.length; i++){
    //                  if(result[i].isValid == null){
    //                    this.myAllRDV.data.push(result[i])
    //                  }
    //                 }
    //                 this.cpteDemande = this.myAllRDV.data.length
    //                 console.log(this.cpteDemande);
    //                // this.myAllRDV.data = result;
    //               }
    //             }
    //           ); 
    //         }
    //         if(this.currentUser.person_type == 'PATIENT'){
    //           let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "PATIENT"};
    //           //Get all RDV for the current medecin
    //           this.restApi.getRDVByPatient(postBody, localStorage.getItem("token")).subscribe(
    //             {
    //               next: (result: any) =>{
    //                 for(let i=0; i<result.length; i++){
    //                  if(result[i].isValid != null){
    //                    this.myAllRDV.data.push(result[i])
    //                  }
    //                 }
    //                 this.cpteDemande = this.myAllRDV.data.length
    //                 console.log(this.cpteDemande);
    //                // this.myAllRDV.data = result;
    //               }
    //             }
    //           ); 
    //         }
    //       }
    //     }
    //   );
    // }
    logout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 39, vars: 2, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header", 2, "background-color", "#99b9ec"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/ges_cab.png", "width", "38", "height", "38", "alt", "Logo", 1, "rounded-circle"], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "user_profile", 2, "padding", "0px 25px 0px 0px"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["src", "assets/images/ges_cab.png", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "msr-2"], ["href", "javascript:void(0);", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "GesCabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_35_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "D\u00E9connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", ctx.homePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 66105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": function() { return /* binding */ PageLoaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 95593);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 39617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminRoutes": function() { return /* binding */ SuperAdminRoutes; },
/* harmony export */   "AdminRoutes": function() { return /* binding */ AdminRoutes; },
/* harmony export */   "MedecinRoutes": function() { return /* binding */ MedecinRoutes; },
/* harmony export */   "PatientRoutes": function() { return /* binding */ PatientRoutes; }
/* harmony export */ });
//Super Admin routes access
const SuperAdminRoutes = [
    // Super Admin Modules
    {
        path: "/admin/dashboard/main",
        title: "Tableau de bord",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/admin/appointment/viewAppointment",
        title: "Liste des Rendez-vous",
        moduleName: "appointment",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "",
        groupTitle: false,
        submenu: []
    },
    {
        path: "/admin/patients/all-patients",
        title: "Liste des Patients",
        moduleName: "patients",
        iconType: "material-icons-two-tone",
        icon: "face",
        class: "",
        groupTitle: false,
        submenu: []
    },
    {
        path: "",
        title: "Mes médecins",
        moduleName: "doctors",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "menu-toggle",
        groupTitle: false,
        submenu: [
            {
                path: "/admin/doctors/allDoctors",
                title: "Liste des médecins",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "/admin/doctors/add-doctor",
                title: "Ajouter un médecin",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            }
        ],
    },
    {
        path: "",
        title: "Les administrateurs",
        moduleName: "admin",
        iconType: "material-icons-two-tone",
        icon: "people_alt",
        class: "menu-toggle",
        groupTitle: false,
        submenu: [
            {
                path: "/admin/simple-admin/allAdmins",
                title: "Lister les administrateurs",
                moduleName: "admin",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "/admin/simple-admin/add-admin",
                title: "Ajouter un administrateur",
                moduleName: "admin",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
        ]
    },
];
//Admin routes access
const AdminRoutes = [
    //Admin Modules
    {
        path: "/admin/dashboard/main",
        title: "Tableau de bord",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/admin/appointment/viewAppointment",
        title: "Liste des Rendez-vous",
        moduleName: "appointment",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "",
        groupTitle: false,
        submenu: []
    },
    {
        path: "/admin/patients/all-patients",
        title: "Liste des Patients",
        moduleName: "patients",
        iconType: "material-icons-two-tone",
        icon: "face",
        class: "",
        groupTitle: false,
        submenu: []
    },
    {
        path: "",
        title: "Mes médecins",
        moduleName: "doctors",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "menu-toggle",
        groupTitle: false,
        submenu: [
            {
                path: "/admin/doctors/allDoctors",
                title: "Liste des médecins",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "/admin/doctors/add-doctor",
                title: "Ajouter un médecin",
                moduleName: "doctors",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            }
        ],
    }
];
//Medecin routes access
const MedecinRoutes = [
    // Medecin Modules
    {
        path: "/doctor/dashboard",
        title: "Tableau de bord",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/doctor/appointments",
        title: "Mes Rendez-vous",
        moduleName: "appointments",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/doctor/doctors",
        title: "Lister les médecins",
        moduleName: "doctors",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/doctor/patients",
        title: "Lister mes patients",
        moduleName: "patients",
        iconType: "material-icons-two-tone",
        icon: "face",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/doctor/settings",
        title: "Modifier mon profile",
        moduleName: "settings",
        iconType: "material-icons-two-tone",
        icon: "settings",
        class: "",
        groupTitle: false,
        submenu: [],
    }
];
//Patient routes access
const PatientRoutes = [
    // Patient Modules
    {
        path: "/patient/dashboard",
        title: "Tableau de bord",
        moduleName: "dashboard",
        iconType: "material-icons-two-tone",
        icon: "home",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "",
        title: "Rendez-vous",
        moduleName: "appointments",
        iconType: "material-icons-two-tone",
        icon: "assignment",
        class: "menu-toggle",
        groupTitle: false,
        submenu: [
            {
                path: "/patient/appointments/today",
                title: "Mes rendez-vous d'aujourd'hui",
                moduleName: "appointments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "/patient/appointments/upcoming",
                title: "Mes rendez-vous à venir",
                moduleName: "appointments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
            {
                path: "/patient/appointments/past",
                title: "Mes rendez-vous passés",
                moduleName: "appointments",
                iconType: "",
                icon: "",
                class: "ml-menu",
                groupTitle: false,
                submenu: [],
            },
        ],
    },
    {
        path: "/doctor/doctors",
        title: "Lister les médecins",
        moduleName: "doctors",
        iconType: "material-icons-two-tone",
        icon: "supervised_user_circle",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/patient/cabinet",
        title: "Maps",
        moduleName: "patient",
        iconType: "material-icons-two-tone",
        icon: "map",
        class: "",
        groupTitle: false,
        submenu: [],
    },
    {
        path: "/patient/settings",
        title: "Modifier mon profile",
        moduleName: "settings",
        iconType: "material-icons-two-tone",
        icon: "settings",
        class: "",
        groupTitle: false,
        submenu: [],
    },
];


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 39617);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/api-services/rest-api.service */ 75996);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);











function SidebarComponent_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, sidebarItem_r1.title));
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.callLevel1Toggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, sidebarItem_r1.iconType));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, sidebarItem_r1.title));
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const sidebarSubsubItem_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return ctx_r15.callLevel3Toggle($event, sidebarSubsubItem_r14.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubsubItem_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r13.level3Menu === sidebarSubsubItem_r14.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r14.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarSubsubItem_r14.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, sidebarSubsubItem_r14.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, sidebarSubsubItem_r14.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, sidebarSubsubItem_r14.title), " ");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template, 4, 11, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sidebarSubItem_r11.submenu);
} }
function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const sidebarSubItem_r11 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.callLevel2Toggle($event, sidebarSubItem_r11.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_3_li_1_ul_4_Template, 2, 1, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r10.level2Menu === sidebarSubItem_r11.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, sidebarSubItem_r11.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, sidebarSubItem_r11.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarSubItem_r11.submenu.length > 0);
} }
function SidebarComponent_li_13_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_Template, 5, 12, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 6, 13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_Template, 2, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router, restApi) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.restApi = restApi;
        this.level1Menu = "";
        this.level2Menu = "";
        this.level3Menu = "";
        this.headerHeight = 60;
        this.routerObj = null;
        this.userProfileImg = this.restApi.userLink + '/getProfileImg/' + localStorage.getItem("username");
        const body = this.elementRef.nativeElement.closest("body");
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                // logic for select active menu in dropdown
                const role = ["admin", "doctor", "patient"];
                const currenturl = event.url.split("?")[0];
                const firstString = currenturl.split("/").slice(1)[0];
                if (role.indexOf(firstString) !== -1) {
                    this.level1Menu = event.url.split("/")[2];
                    this.level2Menu = event.url.split("/")[3];
                }
                else {
                    this.level1Menu = event.url.split("/")[1];
                    this.level2Menu = event.url.split("/")[2];
                }
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, "overlay-open");
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, "overlay-open");
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = "0";
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains("toggled");
        if (hasClass) {
            this.renderer.removeClass(event.target, "toggled");
        }
        else {
            this.renderer.addClass(event.target, "toggled");
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = "0";
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = "0";
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe({
            next: result => {
                this.userData = result;
            },
            error: error => {
                console.log(error);
            }
        });
        const userRole = localStorage.getItem("userRole");
        if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.SUPERADMIN) {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.SuperAdminRoutes;
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.MEDECIN) {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.MedecinRoutes;
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.ADMIN) {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.AdminRoutes;
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.PATIENT) {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.PatientRoutes;
        }
        else {
            this.sidebarItems = [];
        }
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + "";
        this.listMaxWidth = "500px";
    }
    isOpen() {
        return this.bodyTag.classList.contains("overlay-open");
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, "ls-closed");
        }
        else {
            this.renderer.removeClass(this.document.body, "ls-closed");
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("submenu-closed")) {
            this.renderer.addClass(this.document.body, "side-closed-hover");
            this.renderer.removeClass(this.document.body, "submenu-closed");
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest("body");
        if (body.classList.contains("side-closed-hover")) {
            this.renderer.removeClass(this.document.body, "side-closed-hover");
            this.renderer.addClass(this.document.body, "submenu-closed");
        }
    }
    logout() {
        this.authService.logout();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_api_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__.RestApiService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, decls: 20, vars: 9, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["alt", "User Image", 1, "img-circle", "user-img-circle", 3, "src"], [1, "profile-usertitle"], [1, "sidebar-userpic-name"], [1, "profile-usertitle-job"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "menu-top", 3, "click"], [1, "material-icons-two-tone"], [1, "hide-menu"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "D\u00E9connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.userProfileImg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.userData == null ? null : ctx.userData.nom, " ", ctx.userData == null ? null : ctx.userData.prenom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7868:
/*!*******************************************************!*\
  !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeOnDestroyAdapter": function() { return /* binding */ UnsubscribeOnDestroyAdapter; }
/* harmony export */ });
/* harmony import */ var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-sink */ 12822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
class UnsubscribeOnDestroyAdapter {
    constructor() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
UnsubscribeOnDestroyAdapter.ɵfac = function UnsubscribeOnDestroyAdapter_Factory(t) { return new (t || UnsubscribeOnDestroyAdapter)(); };
UnsubscribeOnDestroyAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnsubscribeOnDestroyAdapter, factory: UnsubscribeOnDestroyAdapter.ɵfac });


/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 69129);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 95593);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] }); })();


/***/ }),

/***/ 12822:
/*!************************************!*\
  !*** ./src/app/shared/sub-sink.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": function() { return /* binding */ SubSink; }
/* harmony export */ });
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
class SubSink {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    constructor() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    add(...subscriptions) {
        this._subs = this._subs.concat(subscriptions);
    }
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set sink(subscription) {
        this._subs.push(subscription);
    }
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    unsubscribe() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiLink: "http://172.17.0.1:8000",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map