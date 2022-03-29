(self["webpackChunkgescabinet"] = self["webpackChunkgescabinet"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": function() { return /* binding */ AdminRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-401b22"), __webpack_require__.e("src_app_admin_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 31052)).then((m) => m.DashboardModule),
    },
    {
        path: "appointment",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-8fa89f"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_ngx-material-file-input___ivy_ngcc___fesm2015_ngx-material-file-input_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js-node_modules_angular_-a1eaaa"), __webpack_require__.e("src_app_admin_appointment_appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./appointment/appointment.module */ 73681)).then((m) => m.AppointmentModule),
    },
    {
        path: "doctors",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-8fa89f"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_ngx-material-file-input___ivy_ngcc___fesm2015_ngx-material-file-input_js"), __webpack_require__.e("src_app_admin_doctors_doctors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./doctors/doctors.module */ 86512)).then((m) => m.DoctorsModule),
    },
    {
        path: "patients",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-8fa89f"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_snack-bar_js"), __webpack_require__.e("default-node_modules_ngx-material-file-input___ivy_ngcc___fesm2015_ngx-material-file-input_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js-node_modules_angular_-a1eaaa"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js"), __webpack_require__.e("src_app_admin_patients_patients_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./patients/patients.module */ 91496)).then((m) => m.PatientsModule)
    },
    {
        path: "simple-admin",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_select_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_paginator_js-node_modules_angular-60e71d"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-8fa89f"), __webpack_require__.e("default-node_modules_ngx-material-file-input___ivy_ngcc___fesm2015_ngx-material-file-input_js"), __webpack_require__.e("src_app_admin_simple-admin_simple-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./simple-admin/simple-admin.module */ 54770)).then((m) => m.SimpleAdminModule)
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": function() { return /* binding */ AdminModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts-es2015.js.map