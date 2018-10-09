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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/gmap */ "./node_modules/primeng/gmap.js");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_gmap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angular_gauge_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-gauge-chart */ "./node_modules/angular-gauge-chart/fesm5/angular-gauge-chart.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout/main/main-layout.component */ "./src/app/components/layout/main/main-layout.component.ts");
/* harmony import */ var _components_layout_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/layout/main/menu/menu.component */ "./src/app/components/layout/main/menu/menu.component.ts");
/* harmony import */ var _components_layout_main_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/layout/main/header/header.component */ "./src/app/components/layout/main/header/header.component.ts");
/* harmony import */ var _components_layout_main_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/main/avatar/avatar.component */ "./src/app/components/layout/main/avatar/avatar.component.ts");
/* harmony import */ var _components_layout_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/layout/main/footer/footer.component */ "./src/app/components/layout/main/footer/footer.component.ts");
/* harmony import */ var _components_layout_main_content_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/layout/main/content/content.component */ "./src/app/components/layout/main/content/content.component.ts");
/* harmony import */ var _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layout/clean/clean-layout.component */ "./src/app/components/layout/clean/clean-layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_sensors_accelerometer_accelerometer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sensors/accelerometer/accelerometer.component */ "./src/app/components/sensors/accelerometer/accelerometer.component.ts");
/* harmony import */ var _components_sensors_gps_gps_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sensors/gps/gps.component */ "./src/app/components/sensors/gps/gps.component.ts");
/* harmony import */ var _components_sensors_gyroscope_gyroscope_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sensors/gyroscope/gyroscope.component */ "./src/app/components/sensors/gyroscope/gyroscope.component.ts");
/* harmony import */ var _components_sensors_magnetometer_magnetometer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/sensors/magnetometer/magnetometer.component */ "./src/app/components/sensors/magnetometer/magnetometer.component.ts");
/* harmony import */ var _components_sensors_sensors_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sensors/sensors.component */ "./src/app/components/sensors/sensors.component.ts");
/* harmony import */ var _components_sensors_altitude_altitude_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/sensors/altitude/altitude.component */ "./src/app/components/sensors/altitude/altitude.component.ts");
/* harmony import */ var _components_sensors_presion_presion_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/sensors/presion/presion.component */ "./src/app/components/sensors/presion/presion.component.ts");
/* harmony import */ var _components_sensors_humidity_humidity_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/sensors/humidity/humidity.component */ "./src/app/components/sensors/humidity/humidity.component.ts");
/* harmony import */ var _components_sensors_temperature_out_temperature_out_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/sensors/temperature-out/temperature-out.component */ "./src/app/components/sensors/temperature-out/temperature-out.component.ts");
/* harmony import */ var _components_sensors_temperature_in_temperature_in_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/sensors/temperature-in/temperature-in.component */ "./src/app/components/sensors/temperature-in/temperature-in.component.ts");
/* harmony import */ var _components_sensors_vibration_vibration_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/sensors/vibration/vibration.component */ "./src/app/components/sensors/vibration/vibration.component.ts");
/* harmony import */ var _components_sensors_voltage_voltage_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/sensors/voltage/voltage.component */ "./src/app/components/sensors/voltage/voltage.component.ts");
/* harmony import */ var _components_sensors_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/sensors/webcam/webcam.component */ "./src/app/components/sensors/webcam/webcam.component.ts");
/* harmony import */ var _components_sensors_gyroscope_3d_gyroscope_3d_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/sensors/gyroscope-3d/gyroscope-3d.component */ "./src/app/components/sensors/gyroscope-3d/gyroscope-3d.component.ts");
/* harmony import */ var _components_sensors_speed_speed_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/sensors/speed/speed.component */ "./src/app/components/sensors/speed/speed.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_14__["MainLayoutComponent"],
                _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_20__["CleanLayoutComponent"],
                _components_layout_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _components_layout_main_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_layout_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _components_layout_main_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__["AvatarComponent"],
                _components_layout_main_content_content_component__WEBPACK_IMPORTED_MODULE_19__["ContentComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _components_sensors_accelerometer_accelerometer_component__WEBPACK_IMPORTED_MODULE_23__["AccelerometerComponent"],
                _components_sensors_gps_gps_component__WEBPACK_IMPORTED_MODULE_24__["GpsComponent"],
                _components_sensors_gyroscope_gyroscope_component__WEBPACK_IMPORTED_MODULE_25__["GyroscopeComponent"],
                _components_sensors_magnetometer_magnetometer_component__WEBPACK_IMPORTED_MODULE_26__["MagnetometerComponent"],
                _components_sensors_sensors_component__WEBPACK_IMPORTED_MODULE_27__["SensorsComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_22__["HistoryComponent"],
                _components_sensors_altitude_altitude_component__WEBPACK_IMPORTED_MODULE_28__["AltitudeComponent"],
                _components_sensors_presion_presion_component__WEBPACK_IMPORTED_MODULE_29__["PresionComponent"],
                _components_sensors_humidity_humidity_component__WEBPACK_IMPORTED_MODULE_30__["HumidityComponent"],
                _components_sensors_temperature_out_temperature_out_component__WEBPACK_IMPORTED_MODULE_31__["TemperatureOutComponent"],
                _components_sensors_temperature_in_temperature_in_component__WEBPACK_IMPORTED_MODULE_32__["TemperatureInComponent"],
                _components_sensors_vibration_vibration_component__WEBPACK_IMPORTED_MODULE_33__["VibrationComponent"],
                _components_sensors_voltage_voltage_component__WEBPACK_IMPORTED_MODULE_34__["VoltageComponent"],
                _components_sensors_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_35__["WebcamComponent"],
                _components_sensors_gyroscope_3d_gyroscope_3d_component__WEBPACK_IMPORTED_MODULE_36__["Gyroscope3DComponent"],
                _components_sensors_speed_speed_component__WEBPACK_IMPORTED_MODULE_37__["SpeedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_9__["ChartModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                primeng_gmap__WEBPACK_IMPORTED_MODULE_10__["GMapModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamModule"],
                angular_gauge_chart__WEBPACK_IMPORTED_MODULE_11__["GaugeChartModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCDg3Orzu4YR0zDyeHxtvk5Yic8IvnIbKE'
                }),
                ng_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot({ url: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverBaseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + 'io/logs?s=ui', options: {} }),
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
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
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");





var ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: _components_layout_clean_clean_layout_component__WEBPACK_IMPORTED_MODULE_2__["CleanLayoutComponent"], children: [] },
    { path: '', component: _components_layout_main_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"], children: [
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'history', component: _components_history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"] },
        ] },
];
var ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/components/history/history.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">History</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onBack()\" name=\"button\">\n        Back\n      </button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onNext()\" name=\"button\">\n        Next\n      </button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onRefresh()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Gyroscope</h3>\n        <div class=\"card-options\">\n\n        </div>\n      </div>\n      <div class=\"card-table\">\n\n        <table class=\"table card-table table-hover\">\n          <thead>\n            <tr>\n              <th>X</th>\n              <th>Y</th>\n              <th>Z</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of imu\">\n              <td>{{item.data.gyroscope.x || 0}}</td>\n              <td>{{item.data.gyroscope.y || 0}}</td>\n              <td>{{item.data.gyroscope.z || 0}}</td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Accelerometer</h3>\n        <div class=\"card-options\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onRefresh()\" name=\"button\">\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-table\">\n        <table class=\"table card-table table-hover\">\n          <thead>\n            <tr>\n              <th>X</th>\n              <th>Y</th>\n              <th>Z</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of imu\">\n              <td>{{item.data.accelerometer.x || 0}}</td>\n              <td>{{item.data.accelerometer.y || 0}}</td>\n              <td>{{item.data.accelerometer.z || 0}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Magnetometer</h3>\n        <div class=\"card-options\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onRefresh()\" name=\"button\">\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-table\">\n        <table class=\"table card-table table-hover\">\n          <thead>\n            <tr>\n              <th>X</th>\n              <th>Y</th>\n              <th>Z</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of imu\">\n              <td>{{item.data.magnetometer.x || 0}}</td>\n              <td>{{item.data.magnetometer.y || 0}}</td>\n              <td>{{item.data.magnetometer.z || 0}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
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
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/history/history.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-sensors></app-sensors>\n"

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

module.exports = "<ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\"\n      [routerLink]=\"['/home']\"\n      routerLinkActive=\"active\"><span class=\"nav-text\">Home</span>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\"\n      [routerLink]=\"['/history']\"\n      routerLinkActive=\"active\"><span class=\"nav-text\">History</span>\n    </a>\n  </li>\n  <!-- <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\"\n      [routerLink]=\"['/display']\"\n      routerLinkActive=\"active\"><span class=\"nav-text\">Display</span>\n    </a>\n  </li> -->\n</ul>\n"

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

/***/ "./src/app/components/sensors/accelerometer/accelerometer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sensors/accelerometer/accelerometer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Accelerometer</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n            <p-chart #chart1 type=\"line\" [data]=\"dataX\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart2 type=\"line\" [data]=\"dataY\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart3 type=\"line\" [data]=\"dataZ\" ></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/accelerometer/accelerometer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sensors/accelerometer/accelerometer.component.ts ***!
  \*****************************************************************************/
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
        this.onRun(this.accelerometer);
    };
    AccelerometerComponent.prototype.onRun = function (accelerometer) {
        console.log("onRun", this.cont);
        if (accelerometer) {
            this.dataX.labels.push(this.cont);
            this.dataY.labels.push(this.cont);
            this.dataZ.labels.push(this.cont);
            this.dataX.datasets[0].data.push(accelerometer.x);
            this.dataY.datasets[0].data.push(accelerometer.y);
            this.dataZ.datasets[0].data.push(accelerometer.z);
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
    ], AccelerometerComponent.prototype, "accelerometer", void 0);
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
            template: __webpack_require__(/*! ./accelerometer.component.html */ "./src/app/components/sensors/accelerometer/accelerometer.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], AccelerometerComponent);
    return AccelerometerComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/altitude/altitude.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sensors/altitude/altitude.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Altitude</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <p-chart #chart type=\"line\" [data]=\"data\" ></p-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/altitude/altitude.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sensors/altitude/altitude.component.ts ***!
  \*******************************************************************/
/*! exports provided: AltitudeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltitudeComponent", function() { return AltitudeComponent; });
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

var AltitudeComponent = /** @class */ (function () {
    function AltitudeComponent() {
        this.cont = 0;
        this.data = {
            labels: [],
            datasets: [
                {
                    label: 'Altitude',
                    data: [],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
            ]
        };
    }
    AltitudeComponent.prototype.ngOnInit = function () {
    };
    AltitudeComponent.prototype.ngOnChanges = function () {
        this.onUpdateChart();
    };
    AltitudeComponent.prototype.onUpdateChart = function () {
        this.cont++;
        this.data.labels.push(this.cont);
        this.data.datasets[0].data.push(this.altitude);
        this.chart.refresh();
    };
    AltitudeComponent.prototype.onReset = function () {
        this.data.labels = [];
        this.data.datasets[0].data = [];
        this.chart.refresh();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", Object)
    ], AltitudeComponent.prototype, "chart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AltitudeComponent.prototype, "altitude", void 0);
    AltitudeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-altitude',
            template: __webpack_require__(/*! ./altitude.component.html */ "./src/app/components/sensors/altitude/altitude.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AltitudeComponent);
    return AltitudeComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/gps/gps.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sensors/gps/gps.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/gps/gps.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sensors/gps/gps.component.ts ***!
  \*********************************************************/
/*! exports provided: GpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsComponent", function() { return GpsComponent; });
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

var GpsComponent = /** @class */ (function () {
    function GpsComponent() {
        this.latitude = 0;
        this.longitude = 0;
        this.satellites = 0;
        this.speed = 0;
        this.zoom = 15;
    }
    GpsComponent.prototype.ngOnInit = function () {
    };
    GpsComponent.prototype.ngOnChanges = function () {
        if (this.gps) {
            this.latitude = this.gps.latitude;
            this.longitude = this.gps.longitude;
            this.satellites = this.gps.satellites;
            this.speed = this.gps.speed;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GpsComponent.prototype, "gps", void 0);
    GpsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gps',
            template: __webpack_require__(/*! ./gps.component.html */ "./src/app/components/sensors/gps/gps.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GpsComponent);
    return GpsComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/gyroscope-3d/gyroscope-3d.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sensors/gyroscope-3d/gyroscope-3d.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Gyroscope 3D View</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <p>x: {{dataRollx}}, y: {{dataRolly}}, z: {{dataRollz}}</p>\n    <canvas #canvas style=\"width:400px; height: 200px\" ></canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/gyroscope-3d/gyroscope-3d.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sensors/gyroscope-3d/gyroscope-3d.component.ts ***!
  \***************************************************************************/
/*! exports provided: Gyroscope3DComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gyroscope3DComponent", function() { return Gyroscope3DComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _js_EnableThreeExamples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/EnableThreeExamples */ "./src/app/components/sensors/gyroscope-3d/js/EnableThreeExamples.js");
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





var Gyroscope3DComponent = /** @class */ (function () {
    function Gyroscope3DComponent() {
        this.dataRollx = '0';
        this.dataRolly = '0';
        this.dataRollz = '0';
        this.accuracy = 2;
        this.orderOfMag = (Math.PI / 180);
        this.fieldOfView = 60;
        this.nearClippingPane = 1;
        this.farClippingPane = 1100;
        this.index = 0;
        this.cont = 0;
        this.render = this.render.bind(this);
        this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
    }
    Object.defineProperty(Gyroscope3DComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Gyroscope3DComponent.prototype.createScene = function () {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        var loader = new three__WEBPACK_IMPORTED_MODULE_1__["ColladaLoader"]();
        var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](200, 200, 200);
        for (var i = 0; i < geometry.faces.length; i += 2) {
            var hex = Math.random() * 0xffffff;
            geometry.faces[i].color.setHex(hex);
            geometry.faces[i + 1].color.setHex(hex);
        }
        var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ vertexColors: three__WEBPACK_IMPORTED_MODULE_1__["FaceColors"], overdraw: 0.5 });
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
        this.mesh.position.y = 20;
        this.scene.add(this.mesh);
    };
    Gyroscope3DComponent.prototype.onModelLoadingCompleted = function (collada) {
        var modelScene = collada.scene;
        this.scene.add(modelScene);
        this.render();
    };
    Gyroscope3DComponent.prototype.createLight = function () {
        var light = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);
        var light = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, -100);
        this.scene.add(light);
    };
    Gyroscope3DComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        // Set position and look at
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.y = 10;
        this.camera.position.z = 300;
    };
    Gyroscope3DComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    Gyroscope3DComponent.prototype.startRendering = function () {
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
    Gyroscope3DComponent.prototype.render = function () {
        this.mesh.rotation.x = -this.dataRollx;
        this.mesh.rotation.y = -this.dataRollz;
        this.mesh.rotation.z = -this.dataRolly;
        this.renderer.render(this.scene, this.camera);
    };
    Gyroscope3DComponent.prototype.addControls = function () {
        // this.controls = new THREE.OrbitControls(this.camera);
        // this.controls.rotateSpeed = 1.0;
        // this.controls.zoomSpeed = 1.2;
        // this.controls.addEventListener('change', this.render);
    };
    Gyroscope3DComponent.prototype.findAllObjects = function (pred, parent) {
        var _this = this;
        if (parent.children.length > 0) {
            parent.children.forEach(function (i) {
                pred.push(i);
                _this.findAllObjects(pred, i);
            });
        }
    };
    Gyroscope3DComponent.prototype.onMouseUp = function (event) {
        console.log("onMouseUp");
    };
    Gyroscope3DComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
    };
    Gyroscope3DComponent.prototype.ngOnInit = function () {
    };
    Gyroscope3DComponent.prototype.ngOnChanges = function () {
        this.onRun(this.gyroscope);
    };
    Gyroscope3DComponent.prototype.onRun = function (gyroscope) {
        console.log("onRun", this.cont);
        console.log("onRun", gyroscope);
        if (gyroscope) {
            this.dataRollx = (gyroscope.x *= this.orderOfMag).toFixed(this.accuracy);
            this.dataRolly = (gyroscope.y *= this.orderOfMag).toFixed(this.accuracy);
            this.dataRollz = (gyroscope.z *= this.orderOfMag).toFixed(this.accuracy);
            this.render();
        }
    };
    Gyroscope3DComponent.prototype.onReset = function () {
        this.dataRollx = (1 * this.orderOfMag).toFixed(this.accuracy);
        this.dataRolly = (1 * this.orderOfMag).toFixed(this.accuracy);
        this.dataRollz = (1 * this.orderOfMag).toFixed(this.accuracy);
        this.render();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Gyroscope3DComponent.prototype, "gyroscope", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Gyroscope3DComponent.prototype, "canvasRef", void 0);
    Gyroscope3DComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gyroscope-dd',
            template: __webpack_require__(/*! ./gyroscope-3d.component.html */ "./src/app/components/sensors/gyroscope-3d/gyroscope-3d.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Gyroscope3DComponent);
    return Gyroscope3DComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/gyroscope-3d/js/EnableThreeExamples.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/sensors/gyroscope-3d/js/EnableThreeExamples.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

THREE=__webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

/***/ }),

/***/ "./src/app/components/sensors/gyroscope/gyroscope.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/sensors/gyroscope/gyroscope.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Gyroscope</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n            <p-chart #chart1 type=\"line\" [data]=\"dataX\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart2 type=\"line\" [data]=\"dataY\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart3 type=\"line\" [data]=\"dataZ\" ></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/gyroscope/gyroscope.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sensors/gyroscope/gyroscope.component.ts ***!
  \*********************************************************************/
/*! exports provided: GyroscopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GyroscopeComponent", function() { return GyroscopeComponent; });
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

var GyroscopeComponent = /** @class */ (function () {
    function GyroscopeComponent() {
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
    GyroscopeComponent.prototype.ngAfterViewInit = function () {
    };
    GyroscopeComponent.prototype.ngOnInit = function () {
    };
    GyroscopeComponent.prototype.ngOnChanges = function () {
        this.onRun(this.gyroscope);
    };
    GyroscopeComponent.prototype.onRun = function (gyroscope) {
        console.log("onRun", this.cont);
        if (gyroscope) {
            this.dataX.labels.push(this.cont);
            this.dataY.labels.push(this.cont);
            this.dataZ.labels.push(this.cont);
            this.dataX.datasets[0].data.push(gyroscope.x);
            this.dataY.datasets[0].data.push(gyroscope.y);
            this.dataZ.datasets[0].data.push(gyroscope.z);
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
    ], GyroscopeComponent.prototype, "gyroscope", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GyroscopeComponent.prototype, "canvasRef", void 0);
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
            template: __webpack_require__(/*! ./gyroscope.component.html */ "./src/app/components/sensors/gyroscope/gyroscope.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GyroscopeComponent);
    return GyroscopeComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/humidity/humidity.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sensors/humidity/humidity.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Humidity</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/humidity/humidity.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sensors/humidity/humidity.component.ts ***!
  \*******************************************************************/
/*! exports provided: HumidityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumidityComponent", function() { return HumidityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HumidityComponent = /** @class */ (function () {
    function HumidityComponent(modalService) {
        this.modalService = modalService;
        this.canvasWidth = 200;
        this.needleValue = 0;
        this.centralLabel = '';
        this.name = 'Humidity (%)';
        this.bottomLabel = '65';
        this.rangeMin = '0';
        this.rangeMax = '100';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ['rgb(166, 206, 227)'],
            rangeLabel: [this.rangeMin, this.rangeMax],
            needleStartValue: 0,
        };
        this.range = [];
    }
    HumidityComponent.prototype.ngOnInit = function () {
    };
    HumidityComponent.prototype.ngOnChanges = function () {
        this.needleValue = this.humidity;
        this.bottomLabel = this.humidity;
    };
    HumidityComponent.prototype.onReset = function () {
        this.needleValue = 0;
        this.bottomLabel = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HumidityComponent.prototype, "humidity", void 0);
    HumidityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-humidity',
            template: __webpack_require__(/*! ./humidity.component.html */ "./src/app/components/sensors/humidity/humidity.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], HumidityComponent);
    return HumidityComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/magnetometer/magnetometer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sensors/magnetometer/magnetometer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Magnetometer</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n            <p-chart #chart1 type=\"line\" [data]=\"dataX\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart2 type=\"line\" [data]=\"dataY\" ></p-chart>\n      </div>\n      <div class=\"col-md-4\">\n            <p-chart #chart3 type=\"line\" [data]=\"dataZ\" ></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/magnetometer/magnetometer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sensors/magnetometer/magnetometer.component.ts ***!
  \***************************************************************************/
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
            template: __webpack_require__(/*! ./magnetometer.component.html */ "./src/app/components/sensors/magnetometer/magnetometer.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MagnetometerComponent);
    return MagnetometerComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/presion/presion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/sensors/presion/presion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Presion</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/presion/presion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sensors/presion/presion.component.ts ***!
  \*****************************************************************/
/*! exports provided: PresionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresionComponent", function() { return PresionComponent; });
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

var PresionComponent = /** @class */ (function () {
    function PresionComponent() {
        this.canvasWidth = 200;
        this.needleValue = this.presion;
        this.centralLabel = '';
        this.name = 'Presion (bar)';
        this.bottomLabel = '65';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ['rgb(179, 224, 174)'],
            rangeLabel: ['0', '1500'],
            needleStartValue: 0,
        };
    }
    PresionComponent.prototype.ngOnInit = function () {
    };
    PresionComponent.prototype.ngOnChanges = function () {
        this.needleValue = (this.presion * 100 / 1500);
        this.bottomLabel = this.presion;
    };
    PresionComponent.prototype.onReset = function () {
        this.needleValue = 0;
        this.bottomLabel = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PresionComponent.prototype, "presion", void 0);
    PresionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presion',
            template: __webpack_require__(/*! ./presion.component.html */ "./src/app/components/sensors/presion/presion.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PresionComponent);
    return PresionComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/sensors.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sensors/sensors.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-gps [gps]=\"gps\"></app-gps>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <app-humidity [humidity]=\"humidity\"></app-humidity>\n  </div>\n  <div class=\"col-md-3\">\n    <app-presion [presion]=\"presion\"></app-presion>\n  </div>\n  <div class=\"col-md-3\">\n    <app-temperature-out [temperature]=\"temperatureOut\"></app-temperature-out>\n  </div>\n  <div class=\"col-md-3\">\n    <app-temperature-in [temperature]=\"temperatureIn\"></app-temperature-in>\n  </div>\n  <div class=\"col-md-3\">\n    <app-voltage [voltage]=\"voltage\"></app-voltage>\n  </div>\n  <div class=\"col-md-3\">\n    <app-speed [gps]=\"gps\"></app-speed>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-altitude [altitude]=\"altitude\"></app-altitude>\n  </div>\n  <div class=\"col-md-6\">\n    <app-vibration [vibration]=\"vibration\"></app-vibration>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-accelerometer [accelerometer]=\"accelerometer\"></app-accelerometer>\n  </div>\n  <div class=\"col-md-12\">\n    <app-gyroscope [gyroscope]=\"gyroscope\"></app-gyroscope>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-gyroscope-dd [gyroscope]=\"gyroscope\"></app-gyroscope-dd>\n  </div>\n  <div class=\"col-md-6\">\n    <app-webcam></app-webcam>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/sensors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sensors/sensors.component.ts ***!
  \*********************************************************/
/*! exports provided: SensorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsComponent", function() { return SensorsComponent; });
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



var SensorsComponent = /** @class */ (function () {
    function SensorsComponent(dataService, socket) {
        this.dataService = dataService;
        this.socket = socket;
        this.altitude = 22;
        this.presion = 1000;
        this.humidity = 44;
        this.temperatureOut = 55;
        this.temperatureIn = 66;
        this.vibration = 77;
        this.voltage = 7;
    }
    SensorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on("imu", function (res) {
            _this.accelerometer = res.data.accelerometer;
            _this.gyroscope = res.data.gyroscope;
        });
        this.socket.on("b180", function (res) {
            _this.altitude = res.data.altitude;
            _this.presion = res.data.presion;
        });
        this.socket.on("dth", function (res) {
            _this.humidity = res.data.humidity;
            _this.temperatureIn = res.data.temperature;
        });
        this.socket.on("lm35", function (res) {
            _this.temperatureOut = res.data.temperature;
        });
        this.socket.on("sw", function (res) {
            _this.vibration = res.data.vibration;
        });
        this.socket.on("volt", function (res) {
            _this.voltage = res.data.volt;
        });
        this.socket.on("gps", function (res) {
            _this.gps = res['data'];
        });
        this.socket.on("message", function (data) {
            console.log("[on][message] incoming message ", data);
        });
        this.socket.on("connect", function () {
            console.log("[on][connect] Conected to socket");
        });
        this.socket.on('error', function (error) {
            console.log("[on][error]", error);
        });
    };
    SensorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sensors',
            template: __webpack_require__(/*! ./sensors.component.html */ "./src/app/components/sensors/sensors.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], SensorsComponent);
    return SensorsComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/speed/speed.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/sensors/speed/speed.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Speed</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/speed/speed.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/sensors/speed/speed.component.ts ***!
  \*************************************************************/
/*! exports provided: SpeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedComponent", function() { return SpeedComponent; });
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

var SpeedComponent = /** @class */ (function () {
    function SpeedComponent() {
        this.speed = 0;
        this.canvasWidth = 200;
        this.needleValue = 0;
        this.centralLabel = '';
        this.name = 'Speed (m/s)';
        this.bottomLabel = '0';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ["rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)"],
            arcDelimiters: [30, 70],
            rangeLabel: ['0', '30'],
            needleStartValue: 0,
        };
    }
    SpeedComponent.prototype.ngOnInit = function () {
    };
    SpeedComponent.prototype.ngOnChanges = function () {
        this.needleValue = (this.gps.f_speed_kmph * 100 / 30);
        this.bottomLabel = this.gps.f_speed_kmph;
    };
    SpeedComponent.prototype.onReset = function () {
        this.needleValue = 0;
        this.bottomLabel = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpeedComponent.prototype, "gps", void 0);
    SpeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speed',
            template: __webpack_require__(/*! ./speed.component.html */ "./src/app/components/sensors/speed/speed.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SpeedComponent);
    return SpeedComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/temperature-in/temperature-in.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sensors/temperature-in/temperature-in.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Outside</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/temperature-in/temperature-in.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sensors/temperature-in/temperature-in.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TemperatureInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureInComponent", function() { return TemperatureInComponent; });
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

var TemperatureInComponent = /** @class */ (function () {
    function TemperatureInComponent() {
        this.canvasWidth = 200;
        this.needleValue = this.temperature;
        this.centralLabel = '';
        this.name = 'Temperature (℃)';
        this.bottomLabel = '65';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ["rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)"],
            arcDelimiters: [30, 70],
            rangeLabel: ['0', '100'],
            needleStartValue: 0,
        };
    }
    TemperatureInComponent.prototype.ngOnInit = function () {
    };
    TemperatureInComponent.prototype.ngOnChanges = function () {
        this.needleValue = this.temperature;
        this.bottomLabel = this.temperature;
    };
    TemperatureInComponent.prototype.onReset = function () {
        this.needleValue = 0;
        this.bottomLabel = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureInComponent.prototype, "temperature", void 0);
    TemperatureInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temperature-in',
            template: __webpack_require__(/*! ./temperature-in.component.html */ "./src/app/components/sensors/temperature-in/temperature-in.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TemperatureInComponent);
    return TemperatureInComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/temperature-out/temperature-out.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sensors/temperature-out/temperature-out.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Inside</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/temperature-out/temperature-out.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sensors/temperature-out/temperature-out.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TemperatureOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureOutComponent", function() { return TemperatureOutComponent; });
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

var TemperatureOutComponent = /** @class */ (function () {
    function TemperatureOutComponent() {
        this.canvasWidth = 200;
        this.needleValue = this.temperature;
        this.centralLabel = '';
        this.name = 'Temperature (℃)';
        this.bottomLabel = '65';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ["rgb(61,204,91)", "rgb(239,214,19)", "rgb(255,84,84)"],
            arcDelimiters: [30, 70],
            rangeLabel: ['0', '100'],
            needleStartValue: 0,
        };
    }
    TemperatureOutComponent.prototype.ngOnInit = function () {
    };
    TemperatureOutComponent.prototype.ngOnChanges = function () {
        this.needleValue = this.temperature;
        this.bottomLabel = this.temperature;
    };
    TemperatureOutComponent.prototype.onReset = function () {
        this.needleValue = 0;
        this.bottomLabel = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureOutComponent.prototype, "temperature", void 0);
    TemperatureOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temperature-out',
            template: __webpack_require__(/*! ./temperature-out.component.html */ "./src/app/components/sensors/temperature-out/temperature-out.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TemperatureOutComponent);
    return TemperatureOutComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/vibration/vibration.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/sensors/vibration/vibration.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Vibration</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <p-chart #chart type=\"line\" [data]=\"data\" ></p-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/vibration/vibration.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sensors/vibration/vibration.component.ts ***!
  \*********************************************************************/
/*! exports provided: VibrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VibrationComponent", function() { return VibrationComponent; });
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

var VibrationComponent = /** @class */ (function () {
    function VibrationComponent() {
        this.cont = 0;
        this.data = {
            labels: [],
            datasets: [
                {
                    label: 'Vibration',
                    data: [],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
            ]
        };
    }
    VibrationComponent.prototype.ngOnInit = function () {
    };
    VibrationComponent.prototype.ngOnChanges = function () {
        this.onUpdateChart();
    };
    VibrationComponent.prototype.onUpdateChart = function () {
        this.cont++;
        this.data.labels.push(this.cont);
        this.data.datasets[0].data.push(this.vibration);
        this.chart.refresh();
    };
    VibrationComponent.prototype.onReset = function () {
        this.data.labels = [];
        this.data.datasets[0].data = [];
        this.chart.refresh();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", Object)
    ], VibrationComponent.prototype, "chart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VibrationComponent.prototype, "vibration", void 0);
    VibrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vibration',
            template: __webpack_require__(/*! ./vibration.component.html */ "./src/app/components/sensors/vibration/vibration.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], VibrationComponent);
    return VibrationComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/voltage/voltage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/sensors/voltage/voltage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Voltage</h3>\n    <div class=\"card-options\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-\">\n    <rg-gauge-chart\n        [canvasWidth]=\"canvasWidth\"\n        [needleValue]=\"needleValue\"\n        [centralLabel]=\"centralLabel\"\n        [options]=\"options\"\n        [name]=\"name\"\n        [bottomLabel]=\"bottomLabel\"></rg-gauge-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sensors/voltage/voltage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sensors/voltage/voltage.component.ts ***!
  \*****************************************************************/
/*! exports provided: VoltageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltageComponent", function() { return VoltageComponent; });
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

var VoltageComponent = /** @class */ (function () {
    function VoltageComponent() {
        this.canvasWidth = 200;
        this.needleValue = 0;
        this.centralLabel = '';
        this.name = 'Voltage (V)';
        this.bottomLabel = '65';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ["rgb(255,84,84)"],
            rangeLabel: ['0', '8'],
            needleStartValue: 0,
        };
    }
    VoltageComponent.prototype.ngOnInit = function () {
    };
    VoltageComponent.prototype.ngOnChanges = function () {
        this.needleValue = (this.voltage * 100 / 8);
        this.bottomLabel = this.voltage;
    };
    VoltageComponent.prototype.onReset = function () {
        this.needleValue = 0;
        this.bottomLabel = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VoltageComponent.prototype, "voltage", void 0);
    VoltageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voltage',
            template: __webpack_require__(/*! ./voltage.component.html */ "./src/app/components/sensors/voltage/voltage.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], VoltageComponent);
    return VoltageComponent;
}());



/***/ }),

/***/ "./src/app/components/sensors/webcam/webcam.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sensors/webcam/webcam.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">WebCam View</h3>\n    <div class=\"card-options\">\n\n      <button class=\"btn btn-default\" (click)=\"triggerSnapshot(dialog);\">\n        <i class=\"fa fa-camera\"></i>\n      </button>\n      <button class=\"btn btn-default\" (click)=\"toggleWebcam();\">\n        <i class=\"fa fa-eye\"></i>\n\n      </button>\n      <button class=\"btn btn-default\" (click)=\"showNextWebcam(true);\" [disabled]=\"!multipleWebcamsAvailable\">Next</button>\n\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"onReset()\" name=\"button\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-fit\">\n    <webcam [height]=\"300\" [width]=\"400\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n            [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\n            [videoOptions]=\"videoOptions\"\n            (cameraSwitched)=\"cameraWasSwitched($event)\"\n            (initError)=\"handleInitError($event)\"\n    ></webcam>\n\n    <ul *ngFor=\"let error of errors\">\n      <li>{{error | json}}</li>\n    </ul>\n  </div>\n</div>\n\n<ng-template #dialog let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClose('Cross click')\">\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"snapshot\" *ngIf=\"webcamImage\">\n      <img [src]=\"webcamImage.imageAsDataUrl\"/>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onClose('Save click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/sensors/webcam/webcam.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sensors/webcam/webcam.component.ts ***!
  \***************************************************************/
/*! exports provided: WebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebcamComponent = /** @class */ (function () {
    function WebcamComponent(modalService) {
        this.modalService = modalService;
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {};
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    WebcamComponent.prototype.ngOnInit = function () {
        var _this = this;
        ngx_webcam__WEBPACK_IMPORTED_MODULE_2__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    WebcamComponent.prototype.triggerSnapshot = function (content) {
        this.trigger.next();
        this.modal = this.modalService.open(content);
    };
    WebcamComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    WebcamComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    WebcamComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    WebcamComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
    };
    WebcamComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(WebcamComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WebcamComponent.prototype.onClose = function () {
        this.modal.close("close");
    };
    WebcamComponent.prototype.onReset = function () {
    };
    WebcamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webcam',
            template: __webpack_require__(/*! ./webcam.component.html */ "./src/app/components/sensors/webcam/webcam.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], WebcamComponent);
    return WebcamComponent;
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

module.exports = __webpack_require__(/*! /Users/adalarcon/workspace/cansat-ng/src/main.ts */"./src/main.ts");


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