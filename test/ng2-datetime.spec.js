"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('angular2/testing');
var browser_1 = require('angular2/platform/testing/browser');
var ng2_datetime_1 = require('../src/ng2-datetime/ng2-datetime');
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
var MockNgControl = (function (_super) {
    __extends(MockNgControl, _super);
    function MockNgControl() {
        _super.apply(this, arguments);
    }
    MockNgControl.prototype.viewToModelUpdate = function (newVal) {
        console.log('viewToModelUpdate', newVal);
    };
    return MockNgControl;
}(common_1.NgControl));
var mockNgControl = new MockNgControl();
testing_1.describe('ng2-datetime', function () {
    testing_1.beforeEachProviders(function () { return [
        core_1.provide(common_1.NgControl, { useValue: mockNgControl })
    ]; });
    testing_1.it('should init', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb
            .createAsync(ng2_datetime_1.NKDatetime)
            .then(function (fixture) {
            var instance = fixture.componentInstance;
            testing_1.expect(fixture).toBeTruthy();
            testing_1.expect(mockNgControl.valueAccessor).toEqual(instance);
            instance.ngOnInit();
            // fixture.detectChanges();
            testing_1.expect(instance.datepicker).toBeDefined();
            testing_1.expect(instance.timepicker).toBeDefined();
        });
    }));
});
//# sourceMappingURL=ng2-datetime.spec.js.map