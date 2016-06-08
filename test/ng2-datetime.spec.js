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
var testing_1 = require('angular2/testing');
var browser_1 = require('angular2/platform/testing/browser');
var ng2_datetime_1 = require('../src/ng2-datetime/ng2-datetime');
var core_1 = require('@angular/core');
testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
var DemoComponent = (function () {
    function DemoComponent() {
        this.date = new Date();
    }
    __decorate([
        core_1.ViewChild('dt'), 
        __metadata('design:type', ng2_datetime_1.NKDatetime)
    ], DemoComponent.prototype, "dt", void 0);
    DemoComponent = __decorate([
        core_1.Component({
            directives: [ng2_datetime_1.NKDatetime],
            template: "<datetime #dt [(ngModel)]=\"date\"></datetime>"
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
testing_1.describe('ng2-datetime', function () {
    testing_1.it('should init', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb
            .createAsync(DemoComponent)
            .then(function (fixture) {
            var container = fixture.componentInstance;
            fixture.detectChanges();
            testing_1.expect(container.dt).toBeTruthy();
            testing_1.expect(container.dt.date).toEqual(container.date);
            // TODO: test update
            // let newDate = new Date(2017);
            // spyOn(container.dt, 'onChange').and.callThrough();
            // container.dt.dateChange.emit(newDate);
            // expect(container.dt.onChange).toHaveBeenCalledWith(newDate);
        });
    }));
});
//# sourceMappingURL=ng2-datetime.spec.js.map