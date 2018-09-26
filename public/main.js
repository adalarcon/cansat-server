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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/gmap */ "./node_modules/primeng/gmap.js");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_gmap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_gauge_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-gauge-chart */ "./node_modules/angular-gauge-chart/fesm5/angular-gauge-chart.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/main/main-layout.component */ "./src/app/components/layout/main/main-layout.component.ts");
/* harmony import */ var _components_layout_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout/main/menu/menu.component */ "./src/app/components/layout/main/menu/menu.component.ts");
/* harmony import */ var _components_layout_main_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layout/main/header/header.component */ "./src/app/components/layout/main/header/header.component.ts");
/* harmony import */ var _components_layout_main_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout/main/avatar/avatar.component */ "./src/app/components/layout/main/avatar/avatar.component.ts");
/* harmony import */ var _components_layout_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/layout/main/footer/footer.component */ "./src/app/components/layout/main/footer/footer.component.ts");
/* harmony import */ var _components_layout_main_content_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/layout/main/content/content.component */ "./src/app/components/layout/main/content/content.component.ts");
/* harmony import */ var _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/clean/clean-layout.component */ "./src/app/components/layout/clean/clean-layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_imu_accelerometer_accelerometer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/imu/accelerometer/accelerometer.component */ "./src/app/components/imu/accelerometer/accelerometer.component.ts");
/* harmony import */ var _components_gps_gps_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/gps/gps.component */ "./src/app/components/gps/gps.component.ts");
/* harmony import */ var _components_imu_gyroscope_gyroscope_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/imu/gyroscope/gyroscope.component */ "./src/app/components/imu/gyroscope/gyroscope.component.ts");
/* harmony import */ var _components_imu_magnetometer_magnetometer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/imu/magnetometer/magnetometer.component */ "./src/app/components/imu/magnetometer/magnetometer.component.ts");
/* harmony import */ var _components_imu_imu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/imu/imu.component */ "./src/app/components/imu/imu.component.ts");
/* harmony import */ var _components_imu_history_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/imu/history/history.component */ "./src/app/components/imu/history/history.component.ts");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/display/display.component */ "./src/app/components/display/display.component.ts");
/* harmony import */ var _components_bpm_bpm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/bpm/bpm.component */ "./src/app/components/bpm/bpm.component.ts");
/* harmony import */ var _components_dph_dph_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dph/dph.component */ "./src/app/components/dph/dph.component.ts");
/* harmony import */ var _components_im_im_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/im/im.component */ "./src/app/components/im/im.component.ts");
/* harmony import */ var _components_sw_sw_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/sw/sw.component */ "./src/app/components/sw/sw.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_11__["MainLayoutComponent"],
                _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_17__["CleanLayoutComponent"],
                _components_layout_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _components_layout_main_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_layout_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_layout_main_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_14__["AvatarComponent"],
                _components_layout_main_content_content_component__WEBPACK_IMPORTED_MODULE_16__["ContentComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _components_imu_accelerometer_accelerometer_component__WEBPACK_IMPORTED_MODULE_19__["AccelerometerComponent"],
                _components_gps_gps_component__WEBPACK_IMPORTED_MODULE_20__["GpsComponent"],
                _components_imu_gyroscope_gyroscope_component__WEBPACK_IMPORTED_MODULE_21__["GyroscopeComponent"],
                _components_imu_magnetometer_magnetometer_component__WEBPACK_IMPORTED_MODULE_22__["MagnetometerComponent"],
                _components_imu_imu_component__WEBPACK_IMPORTED_MODULE_23__["IMUComponent"],
                _components_imu_history_history_component__WEBPACK_IMPORTED_MODULE_24__["HistoryComponent"],
                _components_display_display_component__WEBPACK_IMPORTED_MODULE_25__["DisplayComponent"],
                _components_bpm_bpm_component__WEBPACK_IMPORTED_MODULE_26__["BpmComponent"],
                _components_dph_dph_component__WEBPACK_IMPORTED_MODULE_27__["DphComponent"],
                _components_im_im_component__WEBPACK_IMPORTED_MODULE_28__["ImComponent"],
                _components_sw_sw_component__WEBPACK_IMPORTED_MODULE_29__["SwComponent"],
                angular_gauge_chart__WEBPACK_IMPORTED_MODULE_9__["GaugeChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_7__["ChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_gmap__WEBPACK_IMPORTED_MODULE_8__["GMapModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCDg3Orzu4YR0zDyeHxtvk5Yic8IvnIbKE'
                }),
                ng_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot({ url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + 'io/logs?s=ui', options: {} }),
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES, ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/main/main-layout.component */ "./src/app/components/layout/main/main-layout.component.ts");
/* harmony import */ var _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/clean/clean-layout.component */ "./src/app/components/layout/clean/clean-layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_imu_imu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/imu/imu.component */ "./src/app/components/imu/imu.component.ts");
/* harmony import */ var _components_gps_gps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gps/gps.component */ "./src/app/components/gps/gps.component.ts");
/* harmony import */ var _components_imu_history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/imu/history/history.component */ "./src/app/components/imu/history/history.component.ts");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/display/display.component */ "./src/app/components/display/display.component.ts");








var ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_2__["CleanLayoutComponent"], children: [] },
    { path: '', component: _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"], children: [
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'imu', component: _components_imu_imu_component__WEBPACK_IMPORTED_MODULE_4__["IMUComponent"] },
            { path: 'gps', component: _components_gps_gps_component__WEBPACK_IMPORTED_MODULE_5__["GpsComponent"] },
            { path: 'history', component: _components_imu_history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"] },
            { path: 'display', component: _components_display_display_component__WEBPACK_IMPORTED_MODULE_7__["DisplayComponent"] }
        ] },
];
var ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/components/bpm/bpm.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/bpm/bpm.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bpm/bpm.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/bpm/bpm.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n"

/***/ }),

/***/ "./src/app/components/bpm/bpm.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/bpm/bpm.component.ts ***!
  \*************************************************/
/*! exports provided: BpmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmComponent", function() { return BpmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BpmComponent = /** @class */ (function () {
    function BpmComponent() {
        this.canvasWidth = 200;
        this.needleValue = 65;
        this.centralLabel = '';
        this.name = 'Gauge chart';
        this.bottomLabel = '65';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ['rgb(255, 00, 00)'],
            arcDelimiters: [30],
            rangeLabel: ['0', '100'],
            needleStartValue: 50,
        };
    }
    BpmComponent.prototype.ngOnInit = function () {
    };
    BpmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bpm',
            template: __webpack_require__(/*! ./bpm.component.html */ "./src/app/components/bpm/bpm.component.html"),
            styles: [__webpack_require__(/*! ./bpm.component.css */ "./src/app/components/bpm/bpm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BpmComponent);
    return BpmComponent;
}());



/***/ }),

/***/ "./src/app/components/display/display.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/display/display.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"></canvas>\n<button type=\"button\" name=\"button\" (click)=\"onNext()\">next</button>\n<button type=\"button\" name=\"button\" (click)=\"onBack()\">back</button>\n"

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/display/display.component.ts ***!
  \*********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/EnableThreeExamples */ "./src/app/components/display/js/EnableThreeExamples.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/js/controls/OrbitControls */ "./node_modules/three/examples/js/controls/OrbitControls.js");
/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three_examples_js_loaders_ColladaLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/js/loaders/ColladaLoader */ "./node_modules/three/examples/js/loaders/ColladaLoader.js");
/* harmony import */ var three_examples_js_loaders_ColladaLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_loaders_ColladaLoader__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
        this.fieldOfView = 60;
        this.nearClippingPane = 1;
        this.farClippingPane = 1100;
        this.index = 0;
        this.data = [
            {
                "_id": "5b6e176c73a1f60e5341966b",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 313,
                        "y": -88,
                        "z": 8292
                    },
                    "gyroscope": {
                        "x": 20,
                        "y": -25,
                        "z": 43
                    },
                    "magnetometer": {
                        "x": -215,
                        "y": 53,
                        "z": -107
                    }
                },
                "timestamp": "2018-08-10T22:53:32.364Z"
            },
            {
                "_id": "5b6e176673a1f60e53419669",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 357,
                        "y": -114,
                        "z": 8283
                    },
                    "gyroscope": {
                        "x": 30,
                        "y": -25,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -207,
                        "y": 243,
                        "z": -177
                    }
                },
                "timestamp": "2018-08-10T22:53:26.616Z"
            },
            {
                "_id": "5b6e175f73a1f60e53419665",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 349,
                        "y": -120,
                        "z": 8271
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -202,
                        "y": 216,
                        "z": -138
                    }
                },
                "timestamp": "2018-08-10T22:53:19.615Z"
            },
            {
                "_id": "5b6e175873a1f60e53419661",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 347,
                        "y": -122,
                        "z": 8280
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -24,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -208,
                        "y": 220,
                        "z": -130
                    }
                },
                "timestamp": "2018-08-10T22:53:12.523Z"
            },
            {
                "_id": "5b6e175473a1f60e53419660",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 352,
                        "y": -127,
                        "z": 8282
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -200,
                        "y": 214,
                        "z": -134
                    }
                },
                "timestamp": "2018-08-10T22:53:08.414Z"
            },
            {
                "_id": "5b6e174f73a1f60e5341965e",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 362,
                        "y": -98,
                        "z": 8273
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -205,
                        "y": 217,
                        "z": -127
                    }
                },
                "timestamp": "2018-08-10T22:53:03.411Z"
            },
            {
                "_id": "5b6e174a73a1f60e5341965c",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 168,
                        "y": -292,
                        "z": 8298
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -24,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -205,
                        "y": 221,
                        "z": -129
                    }
                },
                "timestamp": "2018-08-10T22:52:58.437Z"
            },
            {
                "_id": "5b6e174573a1f60e5341965a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 329,
                        "y": -133,
                        "z": 8267
                    },
                    "gyroscope": {
                        "x": 25,
                        "y": -27,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -215,
                        "y": 227,
                        "z": -155
                    }
                },
                "timestamp": "2018-08-10T22:52:53.614Z"
            },
            {
                "_id": "5b6e173e73a1f60e53419656",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 331,
                        "y": -117,
                        "z": 8292
                    },
                    "gyroscope": {
                        "x": 2,
                        "y": -69,
                        "z": 38
                    },
                    "magnetometer": {
                        "x": -209,
                        "y": 249,
                        "z": -181
                    }
                },
                "timestamp": "2018-08-10T22:52:46.615Z"
            },
            {
                "_id": "5b6e173773a1f60e53419652",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 356,
                        "y": -107,
                        "z": 8275
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -187,
                        "y": 217,
                        "z": -161
                    }
                },
                "timestamp": "2018-08-10T22:52:39.610Z"
            },
            {
                "_id": "5b6e173073a1f60e5341964e",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 343,
                        "y": -98,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -24,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -195,
                        "y": 215,
                        "z": -143
                    }
                },
                "timestamp": "2018-08-10T22:52:32.609Z"
            },
            {
                "_id": "5b6e172973a1f60e5341964a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 345,
                        "y": -110,
                        "z": 8275
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -197,
                        "y": 207,
                        "z": -135
                    }
                },
                "timestamp": "2018-08-10T22:52:25.399Z"
            },
            {
                "_id": "5b6e172473a1f60e53419648",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 323,
                        "y": -108,
                        "z": 8276
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -26,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -192,
                        "y": 214,
                        "z": -146
                    }
                },
                "timestamp": "2018-08-10T22:52:20.405Z"
            },
            {
                "_id": "5b6e171f73a1f60e53419646",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 312,
                        "y": -172,
                        "z": 8387
                    },
                    "gyroscope": {
                        "x": 1,
                        "y": -93,
                        "z": 29
                    },
                    "magnetometer": {
                        "x": -198,
                        "y": 234,
                        "z": -176
                    }
                },
                "timestamp": "2018-08-10T22:52:15.595Z"
            },
            {
                "_id": "5b6e171973a1f60e53419642",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": -721,
                        "y": 1381,
                        "z": 9067
                    },
                    "gyroscope": {
                        "x": -630,
                        "y": 538,
                        "z": -3048
                    },
                    "magnetometer": {
                        "x": -54,
                        "y": 30,
                        "z": -176
                    }
                },
                "timestamp": "2018-08-10T22:52:08.893Z"
            },
            {
                "_id": "5b6e171573a1f60e53419641",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 835,
                        "y": -669,
                        "z": 9129
                    },
                    "gyroscope": {
                        "x": -901,
                        "y": -407,
                        "z": -513
                    },
                    "magnetometer": {
                        "x": -277,
                        "y": 169,
                        "z": -211
                    }
                },
                "timestamp": "2018-08-10T22:52:04.834Z"
            },
            {
                "_id": "5b6e171173a1f60e53419640",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 657,
                        "y": 304,
                        "z": 8699
                    },
                    "gyroscope": {
                        "x": 403,
                        "y": -423,
                        "z": 321
                    },
                    "magnetometer": {
                        "x": -312,
                        "y": 136,
                        "z": -138
                    }
                },
                "timestamp": "2018-08-10T22:52:00.769Z"
            },
            {
                "_id": "5b6e170c73a1f60e5341963f",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": -294,
                        "y": -946,
                        "z": 7008
                    },
                    "gyroscope": {
                        "x": -747,
                        "y": -977,
                        "z": -160
                    },
                    "magnetometer": {
                        "x": -277,
                        "y": 207,
                        "z": -9
                    }
                },
                "timestamp": "2018-08-10T22:51:56.709Z"
            },
            {
                "_id": "5b6e170873a1f60e5341963e",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 1021,
                        "y": -1646,
                        "z": 9180
                    },
                    "gyroscope": {
                        "x": -1165,
                        "y": -362,
                        "z": -117
                    },
                    "magnetometer": {
                        "x": -198,
                        "y": 18,
                        "z": -42
                    }
                },
                "timestamp": "2018-08-10T22:51:52.604Z"
            },
            {
                "_id": "5b6e170173a1f60e5341963a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 181,
                        "y": -106,
                        "z": 8294
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -199,
                        "y": 5,
                        "z": -51
                    }
                },
                "timestamp": "2018-08-10T22:51:45.604Z"
            },
            {
                "_id": "5b6e16fa73a1f60e53419636",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 182,
                        "y": -102,
                        "z": 8283
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -204,
                        "y": 18,
                        "z": -42
                    }
                },
                "timestamp": "2018-08-10T22:51:38.602Z"
            },
            {
                "_id": "5b6e16f373a1f60e53419632",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 211,
                        "y": -135,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -200,
                        "y": 18,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T22:51:31.605Z"
            },
            {
                "_id": "5b6e16ec73a1f60e5341962e",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 221,
                        "y": -126,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -194,
                        "y": 8,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T22:51:24.497Z"
            },
            {
                "_id": "5b6e16e873a1f60e5341962d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 198,
                        "y": -52,
                        "z": 8286
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -24,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -194,
                        "y": 14,
                        "z": -54
                    }
                },
                "timestamp": "2018-08-10T22:51:20.396Z"
            },
            {
                "_id": "5b6e16e373a1f60e5341962b",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 159,
                        "y": -91,
                        "z": 8295
                    },
                    "gyroscope": {
                        "x": 32,
                        "y": -12,
                        "z": 79
                    },
                    "magnetometer": {
                        "x": -197,
                        "y": 11,
                        "z": -61
                    }
                },
                "timestamp": "2018-08-10T22:51:15.607Z"
            },
            {
                "_id": "5b6e16df73a1f60e5341962a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 586,
                        "y": -1128,
                        "z": 7740
                    },
                    "gyroscope": {
                        "x": -479,
                        "y": 215,
                        "z": 832
                    },
                    "magnetometer": {
                        "x": -365,
                        "y": -107,
                        "z": -13
                    }
                },
                "timestamp": "2018-08-10T22:51:11.531Z"
            },
            {
                "_id": "5b6e16db73a1f60e53419629",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 510,
                        "y": -289,
                        "z": 8989
                    },
                    "gyroscope": {
                        "x": 373,
                        "y": 1187,
                        "z": -1434
                    },
                    "magnetometer": {
                        "x": -290,
                        "y": 30,
                        "z": 118
                    }
                },
                "timestamp": "2018-08-10T22:51:07.468Z"
            },
            {
                "_id": "5b6e16d473a1f60e53419626",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 834,
                        "y": -11,
                        "z": 8176
                    },
                    "gyroscope": {
                        "x": 2,
                        "y": 26,
                        "z": 20
                    },
                    "magnetometer": {
                        "x": -349,
                        "y": 141,
                        "z": -481
                    }
                },
                "timestamp": "2018-08-10T22:51:00.593Z"
            },
            {
                "_id": "5b6e16cd73a1f60e53419622",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 554,
                        "y": -261,
                        "z": 8230
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -71,
                        "z": 65
                    },
                    "magnetometer": {
                        "x": -364,
                        "y": 150,
                        "z": -462
                    }
                },
                "timestamp": "2018-08-10T22:50:53.596Z"
            },
            {
                "_id": "5b6e16c673a1f60e5341961e",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 584,
                        "y": -624,
                        "z": 8235
                    },
                    "gyroscope": {
                        "x": 142,
                        "y": -68,
                        "z": 67
                    },
                    "magnetometer": {
                        "x": -368,
                        "y": 138,
                        "z": -460
                    }
                },
                "timestamp": "2018-08-10T22:50:46.599Z"
            },
            {
                "_id": "5b6e16bf73a1f60e5341961a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 167,
                        "y": -92,
                        "z": 8282
                    },
                    "gyroscope": {
                        "x": 23,
                        "y": -61,
                        "z": 76
                    },
                    "magnetometer": {
                        "x": -377,
                        "y": 159,
                        "z": -529
                    }
                },
                "timestamp": "2018-08-10T22:50:39.405Z"
            },
            {
                "_id": "5b6e16ba73a1f60e53419618",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 400,
                        "y": 161,
                        "z": 8458
                    },
                    "gyroscope": {
                        "x": -696,
                        "y": 116,
                        "z": -2383
                    },
                    "magnetometer": {
                        "x": -195,
                        "y": 95,
                        "z": -479
                    }
                },
                "timestamp": "2018-08-10T22:50:34.595Z"
            },
            {
                "_id": "5b6e16b673a1f60e53419617",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 1139,
                        "y": -1908,
                        "z": 9729
                    },
                    "gyroscope": {
                        "x": 1018,
                        "y": -129,
                        "z": 880
                    },
                    "magnetometer": {
                        "x": -403,
                        "y": 177,
                        "z": -375
                    }
                },
                "timestamp": "2018-08-10T22:50:30.487Z"
            },
            {
                "_id": "5b6e16b273a1f60e53419616",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 1079,
                        "y": -356,
                        "z": 7979
                    },
                    "gyroscope": {
                        "x": -729,
                        "y": 238,
                        "z": -1363
                    },
                    "magnetometer": {
                        "x": -416,
                        "y": 76,
                        "z": -184
                    }
                },
                "timestamp": "2018-08-10T22:50:26.378Z"
            },
            {
                "_id": "5b6e16ad73a1f60e53419614",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 247,
                        "y": -70,
                        "z": 8309
                    },
                    "gyroscope": {
                        "x": 34,
                        "y": -31,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -359,
                        "y": -23,
                        "z": -51
                    }
                },
                "timestamp": "2018-08-10T22:50:21.597Z"
            },
            {
                "_id": "5b6e16a673a1f60e53419610",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 145,
                        "y": -165,
                        "z": 8295
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 31
                    },
                    "magnetometer": {
                        "x": -354,
                        "y": -18,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T22:50:14.600Z"
            },
            {
                "_id": "5b6e169f73a1f60e5341960c",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 185,
                        "y": -54,
                        "z": 8288
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -367,
                        "y": -23,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T22:50:07.402Z"
            },
            {
                "_id": "5b6e169a73a1f60e5341960a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 202,
                        "y": -91,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -360,
                        "y": -16,
                        "z": -54
                    }
                },
                "timestamp": "2018-08-10T22:50:02.597Z"
            },
            {
                "_id": "5b6e169373a1f60e53419606",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 178,
                        "y": -102,
                        "z": 8285
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -24,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -358,
                        "y": -12,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T22:49:55.604Z"
            },
            {
                "_id": "5b6e168c73a1f60e53419602",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 228,
                        "y": -74,
                        "z": 8280
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -26,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -354,
                        "y": -34,
                        "z": -54
                    }
                },
                "timestamp": "2018-08-10T22:49:48.401Z"
            },
            {
                "_id": "5b6e168773a1f60e53419600",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 218,
                        "y": -83,
                        "z": 8279
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -26,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -356,
                        "y": -26,
                        "z": -56
                    }
                },
                "timestamp": "2018-08-10T22:49:43.596Z"
            },
            {
                "_id": "5b6e168073a1f60e534195fc",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 127,
                        "y": -241,
                        "z": 8261
                    },
                    "gyroscope": {
                        "x": 13,
                        "y": 46,
                        "z": -291
                    },
                    "magnetometer": {
                        "x": -352,
                        "y": -26,
                        "z": -56
                    }
                },
                "timestamp": "2018-08-10T22:49:36.611Z"
            },
            {
                "_id": "5b6e167c73a1f60e534195fb",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 155,
                        "y": -114,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -27,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -358,
                        "y": -18,
                        "z": -50
                    }
                },
                "timestamp": "2018-08-10T22:49:32.552Z"
            },
            {
                "_id": "5b6e167873a1f60e534195fa",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 217,
                        "y": -39,
                        "z": 8286
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -24,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -351,
                        "y": -21,
                        "z": -53
                    }
                },
                "timestamp": "2018-08-10T22:49:28.492Z"
            },
            {
                "_id": "5b6e1474861f5b0da046659b",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 228,
                        "y": -97,
                        "z": 8285
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -357,
                        "y": -21,
                        "z": -59
                    }
                },
                "timestamp": "2018-08-10T22:40:51.956Z"
            },
            {
                "_id": "5b6e1470861f5b0da046659a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 224,
                        "y": -84,
                        "z": 8282
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -354,
                        "y": -12,
                        "z": -60
                    }
                },
                "timestamp": "2018-08-10T22:40:47.900Z"
            },
            {
                "_id": "5b6e146c861f5b0da0466599",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 218,
                        "y": -88,
                        "z": 8279
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -26,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -353,
                        "y": -29,
                        "z": -49
                    }
                },
                "timestamp": "2018-08-10T22:40:43.844Z"
            },
            {
                "_id": "5b6e1468861f5b0da0466598",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 218,
                        "y": -96,
                        "z": 8290
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -350,
                        "y": -22,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T22:40:39.784Z"
            },
            {
                "_id": "5b6e1463861f5b0da0466597",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 193,
                        "y": -71,
                        "z": 8287
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -357,
                        "y": -21,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T22:40:35.725Z"
            },
            {
                "_id": "5b6e145f861f5b0da0466596",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 234,
                        "y": -90,
                        "z": 8280
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -356,
                        "y": -24,
                        "z": -54
                    }
                },
                "timestamp": "2018-08-10T22:40:31.669Z"
            },
            {
                "_id": "5b6e145b861f5b0da0466595",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 232,
                        "y": -113,
                        "z": 8276
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -26,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -355,
                        "y": -11,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T22:40:27.609Z"
            },
            {
                "_id": "5b6e1457861f5b0da0466594",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 238,
                        "y": -72,
                        "z": 8282
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -364,
                        "y": -26,
                        "z": -50
                    }
                },
                "timestamp": "2018-08-10T22:40:23.553Z"
            },
            {
                "_id": "5b6e1453861f5b0da0466593",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 230,
                        "y": -93,
                        "z": 8278
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -360,
                        "y": -18,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T22:40:19.494Z"
            },
            {
                "_id": "5b6e144f861f5b0da0466592",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 235,
                        "y": -99,
                        "z": 8288
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -355,
                        "y": -11,
                        "z": -59
                    }
                },
                "timestamp": "2018-08-10T22:40:15.438Z"
            },
            {
                "_id": "5b6e144b861f5b0da0466591",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 199,
                        "y": -100,
                        "z": 8293
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -363,
                        "y": -23,
                        "z": -43
                    }
                },
                "timestamp": "2018-08-10T22:40:11.378Z"
            },
            {
                "_id": "5b6e1447861f5b0da0466590",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 223,
                        "y": -100,
                        "z": 8277
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -27,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -356,
                        "y": -24,
                        "z": -42
                    }
                },
                "timestamp": "2018-08-10T22:40:07.318Z"
            },
            {
                "_id": "5b6e1443861f5b0da046658f",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 238,
                        "y": -122,
                        "z": 8274
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -26,
                        "z": 39
                    },
                    "magnetometer": {
                        "x": -353,
                        "y": -23,
                        "z": -51
                    }
                },
                "timestamp": "2018-08-10T22:40:03.263Z"
            },
            {
                "_id": "5b6e143f861f5b0da046658e",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 224,
                        "y": -80,
                        "z": 8266
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 38
                    },
                    "magnetometer": {
                        "x": -358,
                        "y": -18,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T22:39:59.203Z"
            },
            {
                "_id": "5b6e143b861f5b0da046658d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 190,
                        "y": -9,
                        "z": 8281
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -28,
                        "z": 38
                    },
                    "magnetometer": {
                        "x": -355,
                        "y": -23,
                        "z": -53
                    }
                },
                "timestamp": "2018-08-10T22:39:55.143Z"
            },
            {
                "_id": "5b6e1437861f5b0da046658c",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 230,
                        "y": -89,
                        "z": 8285
                    },
                    "gyroscope": {
                        "x": 31,
                        "y": -26,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -351,
                        "y": -27,
                        "z": -55
                    }
                },
                "timestamp": "2018-08-10T22:39:51.087Z"
            },
            {
                "_id": "5b6e1433861f5b0da046658b",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 233,
                        "y": -89,
                        "z": 8280
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -26,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -361,
                        "y": -21,
                        "z": -45
                    }
                },
                "timestamp": "2018-08-10T22:39:47.027Z"
            },
            {
                "_id": "5b6e142f861f5b0da046658a",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 230,
                        "y": -75,
                        "z": 8282
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -366,
                        "y": -24,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T22:39:42.972Z"
            },
            {
                "_id": "5b6e142b861f5b0da0466589",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 221,
                        "y": -82,
                        "z": 8285
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -26,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -354,
                        "y": -16,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T22:39:38.912Z"
            },
            {
                "_id": "5b6e1427861f5b0da0466588",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 230,
                        "y": -95,
                        "z": 8281
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -25,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -361,
                        "y": -19,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T22:39:34.856Z"
            },
            {
                "_id": "5b6e1423861f5b0da0466587",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 222,
                        "y": -65,
                        "z": 8270
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -25,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -355,
                        "y": -19,
                        "z": -63
                    }
                },
                "timestamp": "2018-08-10T22:39:30.796Z"
            },
            {
                "_id": "5b6e141f861f5b0da0466586",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 218,
                        "y": -95,
                        "z": 8271
                    },
                    "gyroscope": {
                        "x": 30,
                        "y": -25,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -351,
                        "y": -19,
                        "z": -53
                    }
                },
                "timestamp": "2018-08-10T22:39:26.740Z"
            },
            {
                "_id": "5b6e141a861f5b0da0466585",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 215,
                        "y": -88,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 26,
                        "y": -24,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -359,
                        "y": -15,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T22:39:22.681Z"
            },
            {
                "_id": "5b6e1416861f5b0da0466584",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 205,
                        "y": -46,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -20,
                        "z": 33
                    },
                    "magnetometer": {
                        "x": -348,
                        "y": -14,
                        "z": -62
                    }
                },
                "timestamp": "2018-08-10T22:39:18.625Z"
            },
            {
                "_id": "5b6e140f861f5b0da0466580",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 185,
                        "y": -107,
                        "z": 8279
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -24,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -353,
                        "y": -17,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T22:39:11.612Z"
            },
            {
                "_id": "5b6e1408861f5b0da046657c",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 157,
                        "y": -99,
                        "z": 8278
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -24,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -350,
                        "y": -20,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T22:39:04.614Z"
            },
            {
                "_id": "5b6e1401861f5b0da0466578",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 204,
                        "y": -88,
                        "z": 8279
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -356,
                        "y": -12,
                        "z": -64
                    }
                },
                "timestamp": "2018-08-10T22:38:57.408Z"
            },
            {
                "_id": "5b6e13fc861f5b0da0466576",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 177,
                        "y": -96,
                        "z": 8276
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -351,
                        "y": -15,
                        "z": -55
                    }
                },
                "timestamp": "2018-08-10T22:38:52.611Z"
            },
            {
                "_id": "5b6e13f5861f5b0da0466572",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 231,
                        "y": -72,
                        "z": 8274
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -26,
                        "z": 34
                    },
                    "magnetometer": {
                        "x": -350,
                        "y": -12,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T22:38:45.413Z"
            },
            {
                "_id": "5b6e13f0861f5b0da0466570",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 197,
                        "y": -89,
                        "z": 8291
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -348,
                        "y": -10,
                        "z": -50
                    }
                },
                "timestamp": "2018-08-10T22:38:40.612Z"
            },
            {
                "_id": "5b6e13ea861f5b0da046656c",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 200,
                        "y": -62,
                        "z": 8290
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -25,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -343,
                        "y": -17,
                        "z": -59
                    }
                },
                "timestamp": "2018-08-10T22:38:34.078Z"
            },
            {
                "_id": "5b6e0896a0e1d50c8f314a8f",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 146,
                        "y": -111,
                        "z": 8280
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -22,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -336,
                        "y": 38,
                        "z": -62
                    }
                },
                "timestamp": "2018-08-10T21:50:13.410Z"
            },
            {
                "_id": "5b6e0891a0e1d50c8f314a8d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 145,
                        "y": -113,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -329,
                        "y": 45,
                        "z": -53
                    }
                },
                "timestamp": "2018-08-10T21:50:08.408Z"
            },
            {
                "_id": "5b6e088ca0e1d50c8f314a8b",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 150,
                        "y": -116,
                        "z": 8286
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -338,
                        "y": 44,
                        "z": -64
                    }
                },
                "timestamp": "2018-08-10T21:50:03.615Z"
            },
            {
                "_id": "5b6e0885a0e1d50c8f314a87",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 143,
                        "y": -100,
                        "z": 8288
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -23,
                        "z": 38
                    },
                    "magnetometer": {
                        "x": -328,
                        "y": 46,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T21:49:56.409Z"
            },
            {
                "_id": "5b6e0880a0e1d50c8f314a85",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 147,
                        "y": -115,
                        "z": 8278
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 41,
                        "z": -63
                    }
                },
                "timestamp": "2018-08-10T21:49:51.408Z"
            },
            {
                "_id": "5b6e087ba0e1d50c8f314a83",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 143,
                        "y": -112,
                        "z": 8283
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -328,
                        "y": 38,
                        "z": -52
                    }
                },
                "timestamp": "2018-08-10T21:49:46.610Z"
            },
            {
                "_id": "5b6e0874a0e1d50c8f314a7f",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 143,
                        "y": -115,
                        "z": 8291
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -22,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 51,
                        "z": -53
                    }
                },
                "timestamp": "2018-08-10T21:49:39.400Z"
            },
            {
                "_id": "5b6e086fa0e1d50c8f314a7d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 140,
                        "y": -115,
                        "z": 8285
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -21,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -325,
                        "y": 37,
                        "z": -65
                    }
                },
                "timestamp": "2018-08-10T21:49:34.606Z"
            },
            {
                "_id": "5b6e0868a0e1d50c8f314a79",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 145,
                        "y": -106,
                        "z": 8274
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -22,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 47,
                        "z": -57
                    }
                },
                "timestamp": "2018-08-10T21:49:27.597Z"
            },
            {
                "_id": "5b6e0861a0e1d50c8f314a75",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 146,
                        "y": -114,
                        "z": 8286
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -23,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -333,
                        "y": 41,
                        "z": -59
                    }
                },
                "timestamp": "2018-08-10T21:49:20.600Z"
            },
            {
                "_id": "5b6e085aa0e1d50c8f314a71",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 144,
                        "y": -111,
                        "z": 8279
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 45,
                        "z": -55
                    }
                },
                "timestamp": "2018-08-10T21:49:13.603Z"
            },
            {
                "_id": "5b6e0853a0e1d50c8f314a6d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 136,
                        "y": -113,
                        "z": 8278
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -326,
                        "y": 44,
                        "z": -56
                    }
                },
                "timestamp": "2018-08-10T21:49:06.598Z"
            },
            {
                "_id": "5b6e084ca0e1d50c8f314a69",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 146,
                        "y": -112,
                        "z": 8294
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -325,
                        "y": 51,
                        "z": -69
                    }
                },
                "timestamp": "2018-08-10T21:48:59.596Z"
            },
            {
                "_id": "5b6e0845a0e1d50c8f314a65",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 140,
                        "y": -109,
                        "z": 8287
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -329,
                        "y": 47,
                        "z": -51
                    }
                },
                "timestamp": "2018-08-10T21:48:52.595Z"
            },
            {
                "_id": "5b6e083ea0e1d50c8f314a61",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 148,
                        "y": -113,
                        "z": 8287
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 41,
                        "z": -61
                    }
                },
                "timestamp": "2018-08-10T21:48:45.409Z"
            },
            {
                "_id": "5b6e0839a0e1d50c8f314a5f",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 143,
                        "y": -114,
                        "z": 8278
                    },
                    "gyroscope": {
                        "x": 30,
                        "y": -23,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 45,
                        "z": -53
                    }
                },
                "timestamp": "2018-08-10T21:48:40.604Z"
            },
            {
                "_id": "5b6e0832a0e1d50c8f314a5b",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 143,
                        "y": -107,
                        "z": 8287
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -21,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -327,
                        "y": 39,
                        "z": -59
                    }
                },
                "timestamp": "2018-08-10T21:48:33.406Z"
            },
            {
                "_id": "5b6e082da0e1d50c8f314a59",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 147,
                        "y": -109,
                        "z": 8289
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -332,
                        "y": 42,
                        "z": -60
                    }
                },
                "timestamp": "2018-08-10T21:48:28.597Z"
            },
            {
                "_id": "5b6e0826a0e1d50c8f314a55",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 140,
                        "y": -109,
                        "z": 8290
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -24,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 47,
                        "z": -61
                    }
                },
                "timestamp": "2018-08-10T21:48:21.596Z"
            },
            {
                "_id": "5b6e081fa0e1d50c8f314a51",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 148,
                        "y": -114,
                        "z": 8284
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -22,
                        "z": 37
                    },
                    "magnetometer": {
                        "x": -340,
                        "y": 42,
                        "z": -62
                    }
                },
                "timestamp": "2018-08-10T21:48:14.598Z"
            },
            {
                "_id": "5b6e0818a0e1d50c8f314a4d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 139,
                        "y": -111,
                        "z": 8287
                    },
                    "gyroscope": {
                        "x": 30,
                        "y": -21,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -331,
                        "y": 43,
                        "z": -67
                    }
                },
                "timestamp": "2018-08-10T21:48:07.601Z"
            },
            {
                "_id": "5b6e0811a0e1d50c8f314a49",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 142,
                        "y": -111,
                        "z": 8289
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -23,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -333,
                        "y": 45,
                        "z": -61
                    }
                },
                "timestamp": "2018-08-10T21:48:00.596Z"
            },
            {
                "_id": "5b6e080aa0e1d50c8f314a45",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 133,
                        "y": -112,
                        "z": 8283
                    },
                    "gyroscope": {
                        "x": 28,
                        "y": -24,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -334,
                        "y": 42,
                        "z": -58
                    }
                },
                "timestamp": "2018-08-10T21:47:53.599Z"
            },
            {
                "_id": "5b6e0803a0e1d50c8f314a41",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 150,
                        "y": -112,
                        "z": 8277
                    },
                    "gyroscope": {
                        "x": 27,
                        "y": -22,
                        "z": 36
                    },
                    "magnetometer": {
                        "x": -323,
                        "y": 37,
                        "z": -59
                    }
                },
                "timestamp": "2018-08-10T21:47:46.598Z"
            },
            {
                "_id": "5b6e07fca0e1d50c8f314a3d",
                "type": "imu",
                "data": {
                    "accelerometer": {
                        "x": 133,
                        "y": -114,
                        "z": 8287
                    },
                    "gyroscope": {
                        "x": 29,
                        "y": -22,
                        "z": 35
                    },
                    "magnetometer": {
                        "x": -337,
                        "y": 49,
                        "z": -67
                    }
                },
                "timestamp": "2018-08-10T21:47:39.568Z"
            }
        ];
        this.render = this.render.bind(this);
        this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
    }
    Object.defineProperty(DisplayComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    DisplayComponent.prototype.createScene = function () {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        var loader = new three__WEBPACK_IMPORTED_MODULE_1__["ColladaLoader"]();
        var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](5, 5, 5);
        var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshNormalMaterial"]();
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
        this.scene.add(this.mesh);
    };
    DisplayComponent.prototype.onModelLoadingCompleted = function (collada) {
        var modelScene = collada.scene;
        this.scene.add(modelScene);
        this.render();
    };
    DisplayComponent.prototype.createLight = function () {
        var light = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);
        var light = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, -100);
        this.scene.add(light);
    };
    DisplayComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
        // Set position and look at
        this.camera.position.x = 2;
        this.camera.position.y = 2;
        this.camera.position.z = 20;
    };
    DisplayComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    DisplayComponent.prototype.startRendering = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_1__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        var component = this;
        (function render() {
            //requestAnimationFrame(render);
            component.render();
        }());
    };
    DisplayComponent.prototype.onNext = function () {
        this.index++;
        this.refresh();
    };
    DisplayComponent.prototype.onBack = function () {
        this.index--;
        this.refresh();
    };
    DisplayComponent.prototype.refresh = function () {
        this.mesh.rotation.x = this.data[this.index].data.gyroscope.x / 5000;
        this.mesh.rotation.y = this.data[this.index].data.gyroscope.y / 5000;
        this.mesh.rotation.z = this.data[this.index].data.gyroscope.z / 5000;
        this.render();
    };
    DisplayComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    DisplayComponent.prototype.addControls = function () {
        this.controls = new three__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.addEventListener('change', this.render);
    };
    /* EVENTS */
    DisplayComponent.prototype.findAllObjects = function (pred, parent) {
        var _this = this;
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach(function (i) {
                pred.push(i);
                _this.findAllObjects(pred, i);
            });
        }
    };
    DisplayComponent.prototype.onMouseUp = function (event) {
        console.log("onMouseUp");
    };
    /* LIFECYCLE */
    DisplayComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DisplayComponent.prototype, "canvasRef", void 0);
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/components/display/display.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/display/js/EnableThreeExamples.js":
/*!**************************************************************!*\
  !*** ./src/app/components/display/js/EnableThreeExamples.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

/***/ }),

/***/ "./src/app/components/dph/dph.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/dph/dph.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dph/dph.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/dph/dph.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dph works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dph/dph.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/dph/dph.component.ts ***!
  \*************************************************/
/*! exports provided: DphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DphComponent", function() { return DphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DphComponent = /** @class */ (function () {
    function DphComponent() {
    }
    DphComponent.prototype.ngOnInit = function () {
    };
    DphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dph',
            template: __webpack_require__(/*! ./dph.component.html */ "./src/app/components/dph/dph.component.html"),
            styles: [__webpack_require__(/*! ./dph.component.css */ "./src/app/components/dph/dph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DphComponent);
    return DphComponent;
}());



/***/ }),

/***/ "./src/app/components/gps/gps.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/gps/gps.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gps/gps.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/gps/gps.component.ts ***!
  \*************************************************/
/*! exports provided: GpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsComponent", function() { return GpsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GpsComponent = /** @class */ (function () {
    function GpsComponent(socket) {
        this.socket = socket;
        this.latitude = 0;
        this.longitude = 0;
        this.zoom = 15;
    }
    GpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.fromEvent("gps").subscribe(function (data) {
            console.log(data);
            _this.latitude = data['data'].latitude;
            _this.longitude = data['data'].longitude;
        });
        this.socket.fromEvent("message").subscribe(function (data) {
            console.log("[on][message] incoming message ", data);
        });
        this.socket.on("connect", function () {
            console.log("[on][connect] Conected to socket");
        });
        this.socket.on('error', function (error) {
            console.log("[on][error]", error);
        });
    };
    GpsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gps',
            template: __webpack_require__(/*! ./gps.component.html */ "./src/app/components/gps/gps.component.html"),
        }),
        __metadata("design:paramtypes", [ng_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], GpsComponent);
    return GpsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n    <app-bpm></app-bpm>\n  </div>\n  <div class=\"col-md-3\">\n    <app-bpm></app-bpm>\n  </div>\n  <div class=\"col-md-3\">\n    <app-bpm></app-bpm>\n  </div>\n  <div class=\"col-md-3\">\n    <app-bpm></app-bpm>\n  </div>\n</div>\n\n<app-imu></app-imu>\n\n<app-gps></app-gps>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/im/im.component.css":
/*!************************************************!*\
  !*** ./src/app/components/im/im.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/im/im.component.html":
/*!*************************************************!*\
  !*** ./src/app/components/im/im.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  im works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/im/im.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/im/im.component.ts ***!
  \***********************************************/
/*! exports provided: ImComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImComponent", function() { return ImComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImComponent = /** @class */ (function () {
    function ImComponent() {
    }
    ImComponent.prototype.ngOnInit = function () {
    };
    ImComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-im',
            template: __webpack_require__(/*! ./im.component.html */ "./src/app/components/im/im.component.html"),
            styles: [__webpack_require__(/*! ./im.component.css */ "./src/app/components/im/im.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImComponent);
    return ImComponent;
}());



/***/ }),

/***/ "./src/app/components/imu/accelerometer/accelerometer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/imu/accelerometer/accelerometer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Accelerometer</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n            <p-chart #chart1 type=\"line\" [data]=\"dataX\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart2 type=\"line\" [data]=\"dataY\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart3 type=\"line\" [data]=\"dataZ\" ></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/imu/accelerometer/accelerometer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/imu/accelerometer/accelerometer.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccelerometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccelerometerComponent", function() { return AccelerometerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccelerometerComponent = /** @class */ (function () {
    function AccelerometerComponent(dataService, socket) {
        this.dataService = dataService;
        this.socket = socket;
        this.cont = 0;
        this.dataX = {
            labels: [],
            datasets: [
                {
                    label: 'X',
                    data: [],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
            ]
        };
        this.dataY = {
            labels: [],
            datasets: [
                {
                    label: 'Y',
                    data: [],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.dataZ = {
            labels: [],
            datasets: [
                {
                    label: 'Z',
                    data: [],
                    fill: false,
                    borderColor: '#f00'
                }
            ]
        };
    }
    AccelerometerComponent.prototype.ngOnInit = function () {
    };
    AccelerometerComponent.prototype.ngOnChanges = function () {
        this.onRun(this.data);
    };
    AccelerometerComponent.prototype.onRun = function (data) {
        console.log("onRun", this.cont);
        if (data) {
            this.dataX.labels.push(this.cont);
            this.dataY.labels.push(this.cont);
            this.dataZ.labels.push(this.cont);
            this.dataX.datasets[0].data.push(data.data.accelerometer.x);
            this.dataY.datasets[0].data.push(data.data.accelerometer.y);
            this.dataZ.datasets[0].data.push(data.data.accelerometer.z);
            this.cont++;
            this.chart1.refresh();
            this.chart2.refresh();
            this.chart3.refresh();
        }
    };
    AccelerometerComponent.prototype.onReset = function () {
        this.dataX.labels = [];
        this.dataY.labels = [];
        this.dataZ.labels = [];
        this.dataX.datasets[0].data = [];
        this.dataY.datasets[0].data = [];
        this.dataZ.datasets[0].data = [];
        this.chart1.refresh();
        this.chart2.refresh();
        this.chart3.refresh();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccelerometerComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart1'),
        __metadata("design:type", Object)
    ], AccelerometerComponent.prototype, "chart1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart2'),
        __metadata("design:type", Object)
    ], AccelerometerComponent.prototype, "chart2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart3'),
        __metadata("design:type", Object)
    ], AccelerometerComponent.prototype, "chart3", void 0);
    AccelerometerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accelerometer',
            template: __webpack_require__(/*! ./accelerometer.component.html */ "./src/app/components/imu/accelerometer/accelerometer.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], AccelerometerComponent);
    return AccelerometerComponent;
}());



/***/ }),

/***/ "./src/app/components/imu/gyroscope/gyroscope.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/imu/gyroscope/gyroscope.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Gyroscope</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n            <p-chart #chart1 type=\"line\" [data]=\"dataX\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart2 type=\"line\" [data]=\"dataY\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart3 type=\"line\" [data]=\"dataZ\" ></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/imu/gyroscope/gyroscope.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/imu/gyroscope/gyroscope.component.ts ***!
  \*****************************************************************/
/*! exports provided: GyroscopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GyroscopeComponent", function() { return GyroscopeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GyroscopeComponent = /** @class */ (function () {
    function GyroscopeComponent(dataService) {
        this.dataService = dataService;
        this.cont = 0;
        this.dataX = {
            labels: [],
            datasets: [
                {
                    label: 'X',
                    data: [],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
            ]
        };
        this.dataY = {
            labels: [],
            datasets: [
                {
                    label: 'Y',
                    data: [],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.dataZ = {
            labels: [],
            datasets: [
                {
                    label: 'Z',
                    data: [],
                    fill: false,
                    borderColor: '#f00'
                }
            ]
        };
    }
    GyroscopeComponent.prototype.ngOnInit = function () {
    };
    GyroscopeComponent.prototype.ngOnChanges = function () {
        this.onRun(this.data);
    };
    GyroscopeComponent.prototype.onRun = function (data) {
        console.log("onRun", this.cont);
        if (data) {
            this.dataX.labels.push(this.cont);
            this.dataY.labels.push(this.cont);
            this.dataZ.labels.push(this.cont);
            this.dataX.datasets[0].data.push(data.data.gyroscope.x);
            this.dataY.datasets[0].data.push(data.data.gyroscope.y);
            this.dataZ.datasets[0].data.push(data.data.gyroscope.z);
            this.cont++;
            this.chart1.refresh();
            this.chart2.refresh();
            this.chart3.refresh();
        }
    };
    GyroscopeComponent.prototype.onReset = function () {
        this.dataX.labels = [];
        this.dataY.labels = [];
        this.dataZ.labels = [];
        this.dataX.datasets[0].data = [];
        this.dataY.datasets[0].data = [];
        this.dataZ.datasets[0].data = [];
        this.chart1.refresh();
        this.chart2.refresh();
        this.chart3.refresh();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GyroscopeComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart1'),
        __metadata("design:type", Object)
    ], GyroscopeComponent.prototype, "chart1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart2'),
        __metadata("design:type", Object)
    ], GyroscopeComponent.prototype, "chart2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart3'),
        __metadata("design:type", Object)
    ], GyroscopeComponent.prototype, "chart3", void 0);
    GyroscopeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gyroscope',
            template: __webpack_require__(/*! ./gyroscope.component.html */ "./src/app/components/imu/gyroscope/gyroscope.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], GyroscopeComponent);
    return GyroscopeComponent;
}());



/***/ }),

/***/ "./src/app/components/imu/history/history.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/imu/history/history.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">History</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onBack()\" name=\"button\">\n        Back\n      </button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onNext()\" name=\"button\">\n        Next\n      </button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onRefresh()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Gyroscope</h3>\n        <div class=\"card-options\">\n\n        </div>\n      </div>\n      <div class=\"card-table\">\n\n        <table class=\"table card-table table-hover\">\n          <thead>\n            <tr>\n              <th>X</th>\n              <th>Y</th>\n              <th>Z</th>\n              <th>date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of imu\">\n              <td>{{item.data.gyroscope.x || 0}}</td>\n              <td>{{item.data.gyroscope.y || 0}}</td>\n              <td>{{item.data.gyroscope.z || 0}}</td>\n              <td>{{item.timestamp | date:'dd/mm/yy hh:mm'}}</td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Accelerometer</h3>\n        <div class=\"card-options\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onRefresh()\" name=\"button\">\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-table\">\n        <table class=\"table card-table table-hover\">\n          <thead>\n            <tr>\n              <th>X</th>\n              <th>Y</th>\n              <th>Z</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of imu\">\n              <td>{{item.data.accelerometer.x || 0}}</td>\n              <td>{{item.data.accelerometer.y || 0}}</td>\n              <td>{{item.data.accelerometer.z || 0}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Magnetometer</h3>\n        <div class=\"card-options\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onRefresh()\" name=\"button\">\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-table\">\n        <table class=\"table card-table table-hover\">\n          <thead>\n            <tr>\n              <th>X</th>\n              <th>Y</th>\n              <th>Z</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of imu\">\n              <td>{{item.data.magnetometer.x || 0}}</td>\n              <td>{{item.data.magnetometer.y || 0}}</td>\n              <td>{{item.data.magnetometer.z || 0}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/imu/history/history.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/imu/history/history.component.ts ***!
  \*************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(dataService) {
        this.dataService = dataService;
        this.size = 10;
        this.index = 0;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.onFindIMU();
    };
    HistoryComponent.prototype.onFindIMU = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set("filter[type]", 'imu');
        params.set("pager[size]", String(this.size));
        params.set("pager[index]", String(this.index));
        this.dataService.findByParams("logs", params.toString()).subscribe(function (data) {
            _this.imu = data;
        });
    };
    HistoryComponent.prototype.onFindGPS = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set("filter[type]", 'gps');
        params.set("pager[size]", String(this.size));
        params.set("pager[index]", String(this.index));
        this.dataService.findByParams("logs", params.toString()).subscribe(function (data) {
            _this.gps = data;
        });
    };
    HistoryComponent.prototype.onRefresh = function () {
        this.onFindIMU();
    };
    HistoryComponent.prototype.onNext = function () {
        console.log("next");
        this.index = this.index + 1;
        this.onFindIMU();
    };
    HistoryComponent.prototype.onBack = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.onFindIMU();
        }
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/imu/history/history.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/imu/imu.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/imu/imu.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-accelerometer [data]=\"data\"></app-accelerometer>\n  </div>\n  <div class=\"col-md-12\">\n    <app-gyroscope [data]=\"data\"></app-gyroscope>\n\n  </div>\n  <div class=\"col-md-12\">\n    <app-magnetometer [data]=\"data\"></app-magnetometer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/imu/imu.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/imu/imu.component.ts ***!
  \*************************************************/
/*! exports provided: IMUComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMUComponent", function() { return IMUComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IMUComponent = /** @class */ (function () {
    function IMUComponent(dataService, socket) {
        this.dataService = dataService;
        this.socket = socket;
    }
    IMUComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.fromEvent("imu").subscribe(function (data) {
            _this.data = data;
        });
        this.socket.fromEvent("message").subscribe(function (data) {
            console.log("[on][message] incoming message ", data);
        });
        this.socket.on("connect", function () {
            console.log("[on][connect] Conected to socket");
        });
        this.socket.on('error', function (error) {
            console.log("[on][error]", error);
        });
    };
    IMUComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imu',
            template: __webpack_require__(/*! ./imu.component.html */ "./src/app/components/imu/imu.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], IMUComponent);
    return IMUComponent;
}());



/***/ }),

/***/ "./src/app/components/imu/magnetometer/magnetometer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/imu/magnetometer/magnetometer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Magnetometer</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n            <p-chart #chart1 type=\"line\" [data]=\"dataX\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart2 type=\"line\" [data]=\"dataY\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart3 type=\"line\" [data]=\"dataZ\" ></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/imu/magnetometer/magnetometer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/imu/magnetometer/magnetometer.component.ts ***!
  \***********************************************************************/
/*! exports provided: MagnetometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnetometerComponent", function() { return MagnetometerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MagnetometerComponent = /** @class */ (function () {
    function MagnetometerComponent(dataService) {
        this.dataService = dataService;
        this.cont = 0;
        this.dataX = {
            labels: [],
            datasets: [
                {
                    label: 'X',
                    data: [],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
            ]
        };
        this.dataY = {
            labels: [],
            datasets: [
                {
                    label: 'Y',
                    data: [],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.dataZ = {
            labels: [],
            datasets: [
                {
                    label: 'Z',
                    data: [],
                    fill: false,
                    borderColor: '#f00'
                }
            ]
        };
    }
    MagnetometerComponent.prototype.ngOnInit = function () {
    };
    MagnetometerComponent.prototype.ngOnChanges = function () {
        this.onRun(this.data);
    };
    MagnetometerComponent.prototype.onRun = function (data) {
        console.log("onRun", this.cont);
        if (data) {
            this.dataX.labels.push(this.cont);
            this.dataY.labels.push(this.cont);
            this.dataZ.labels.push(this.cont);
            this.dataX.datasets[0].data.push(data.data.magnetometer.x);
            this.dataY.datasets[0].data.push(data.data.magnetometer.y);
            this.dataZ.datasets[0].data.push(data.data.magnetometer.z);
            this.cont++;
            this.chart1.refresh();
            this.chart2.refresh();
            this.chart3.refresh();
        }
    };
    MagnetometerComponent.prototype.onReset = function () {
        this.dataX.labels = [];
        this.dataY.labels = [];
        this.dataZ.labels = [];
        this.dataX.datasets[0].data = [];
        this.dataY.datasets[0].data = [];
        this.dataZ.datasets[0].data = [];
        this.chart1.refresh();
        this.chart2.refresh();
        this.chart3.refresh();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MagnetometerComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart1'),
        __metadata("design:type", Object)
    ], MagnetometerComponent.prototype, "chart1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart2'),
        __metadata("design:type", Object)
    ], MagnetometerComponent.prototype, "chart2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart3'),
        __metadata("design:type", Object)
    ], MagnetometerComponent.prototype, "chart3", void 0);
    MagnetometerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-magnetometer',
            template: __webpack_require__(/*! ./magnetometer.component.html */ "./src/app/components/imu/magnetometer/magnetometer.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MagnetometerComponent);
    return MagnetometerComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/clean/clean-layout.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/clean/clean-layout.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"page-single\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/clean/clean-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/layout/clean/clean-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: CleanLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanLayoutComponent", function() { return CleanLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CleanLayoutComponent = /** @class */ (function () {
    function CleanLayoutComponent() {
    }
    CleanLayoutComponent.prototype.ngOnInit = function () {
    };
    CleanLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clean-layout',
            template: __webpack_require__(/*! ./clean-layout.component.html */ "./src/app/components/layout/clean/clean-layout.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CleanLayoutComponent);
    return CleanLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/main/avatar/avatar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/main/avatar/avatar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngbDropdown class=\"d-inline-block\">\n  <a href=\"javascript:void(0)\" class=\"nav-link pr-0 leading-none\" id=\"dropdownBasic1\" ngbDropdownToggle>\n    <img src=\"assets/img/no-image.png\" class=\"avatar\" >\n    <span class=\"ml-2 d-none d-lg-block\">\n      <span class=\"text-default\"></span>\n    </span>\n  </a>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n    <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/profile']\">\n      <i class=\"dropdown-icon fe fe-user\"></i> Profile\n    </a>\n    <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/settings']\">\n      <i class=\"dropdown-icon fe fe-settings\"></i> Settings\n    </a>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/about']\">\n      <i class=\"dropdown-icon fe fe-info\"></i> About\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/main/avatar/avatar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/layout/main/avatar/avatar.component.ts ***!
  \*******************************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/components/layout/main/avatar/avatar.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/main/content/content.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/layout/main/content/content.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/main/content/content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/main/content/content.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/layout/main/content/content.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/main/footer/footer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/main/footer/footer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row align-items-center flex-row-reverse\">\n      <div class=\"col-auto ml-lg-auto\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-auto\">\n            <ul class=\"list-inline list-inline-dots mb-0\">\n              <li class=\"list-inline-item\"><a href=\"javascript:void(0)\">Documentation</a></li>\n              <li class=\"list-inline-item\"><a href=\"javascript:void(0)\">FAQ</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\n        Copyright © 2018 <a href=\"javascript:void(0)\">Cansat Prototype</a>. All rights reserved.\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/layout/main/footer/footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/layout/main/footer/footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/main/footer/footer.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/main/header/header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/main/header/header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      <a class=\"header-brand\" href=\"#\" [routerLink]=\"['/home']\" >\n        <img src=\"assets/img/logo.png\" class=\"header-brand-img\" alt=\"Cansat\">\n        <span>Cansat</span> \n      </a>\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\n        <span class=\"header-toggler-icon\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n\n      <div class=\"col-lg order-lg-first\">\n        <app-menu></app-menu>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/main/header/header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/layout/main/header/header.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/main/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/main/main-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/layout/main/main-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"page-main\">\n    <app-header> </app-header>\n    <div class=\"my-3 my-md-5\">\n      <app-content> </app-content>\n    </div>\n  </div>\n  <app-footer> </app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/main/main-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/layout/main/main-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/components/layout/main/main-layout.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/main/menu/menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/layout/main/menu/menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\"\n      [routerLink]=\"['/home']\"\n      routerLinkActive=\"active\"><span class=\"nav-text\">Home</span>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\"\n      [routerLink]=\"['/history']\"\n      routerLinkActive=\"active\"><span class=\"nav-text\">History</span>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\"\n      [routerLink]=\"['/display']\"\n      routerLinkActive=\"active\"><span class=\"nav-text\">Display</span>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/layout/main/menu/menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/main/menu/menu.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/layout/main/menu/menu.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/sw/sw.component.css":
/*!************************************************!*\
  !*** ./src/app/components/sw/sw.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sw/sw.component.html":
/*!*************************************************!*\
  !*** ./src/app/components/sw/sw.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sw works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sw/sw.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/sw/sw.component.ts ***!
  \***********************************************/
/*! exports provided: SwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwComponent", function() { return SwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwComponent = /** @class */ (function () {
    function SwComponent() {
    }
    SwComponent.prototype.ngOnInit = function () {
    };
    SwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sw',
            template: __webpack_require__(/*! ./sw.component.html */ "./src/app/components/sw/sw.component.html"),
            styles: [__webpack_require__(/*! ./sw.component.css */ "./src/app/components/sw/sw.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwComponent);
    return SwComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.find = function (collection) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "/");
    };
    DataService.prototype.findByParams = function (collection, params) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "?" + params);
    };
    DataService.prototype.findBy = function (collection, query) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "/" + query);
    };
    DataService.prototype.findById = function (collection, id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "/" + id);
    };
    DataService.prototype.insertOne = function (collection, obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "/", obj);
    };
    DataService.prototype.updateOne = function (collection, obj) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "/", obj);
    };
    DataService.prototype.deleteOne = function (collection, id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + collection + "/" + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
var environment = {
    production: false,
    serverBaseURL: 'http://localhost:3000',
    api: '/api/v1/',
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adalaros/Workspace/cansat-ng/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map