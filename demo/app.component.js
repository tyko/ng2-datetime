"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_datetime_1 = require('../src/ng2-datetime/ng2-datetime');
var AppComponent = (function () {
    function AppComponent() {
        /*
            Remember if you crate new Date second parameter in Date constructor is month
            Integer value representing the month, beginning with 0 for January to 11 for December.
    
            So new Date(2016,3,4) is equal to 2016-04-04
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        */
        this.date = new Date(2016, 3, 4);
        this.date2 = new Date(2016, 3, 4);
        this.datepickerOpts = {
            startDate: new Date(2016, 3, 4),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'D, d MM yyyy'
        };
    }
    AppComponent.prototype.getDate = function (dt) {
        return dt && dt.getTime();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [ng2_datetime_1.NKDatetime],
            pipes: [common_1.DatePipe],
            templateUrl: 'demo/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map