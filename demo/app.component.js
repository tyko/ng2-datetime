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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var ng2_datetime_1 = require('../src/ng2-datetime/ng2-datetime');
var AppComponent = (function () {
    function AppComponent() {
        this.date = new Date();
        this.date2 = new Date('2016-06-08 10:00:00');
        this.date3 = new Date('2016-09-12 23:30:00');
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