import {
    beforeEachProviders,
    describe,
    expect,
    it,
    injectAsync,
    setBaseTestProviders,
    TestComponentBuilder,
    ComponentFixture,
} from 'angular2/testing';
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import {NKDatetime} from '../src/ng2-datetime/ng2-datetime';
import {Component, ViewChild} from '@angular/core';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

@Component({
    directives: [NKDatetime],
    template: `<datetime #dt [(ngModel)]="date"></datetime>`
})
export class DemoComponent {
    date = new Date();
    @ViewChild('dt')
    dt:NKDatetime;
}

describe('ng2-datetime', () => {
    it('should init', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb
            .createAsync(DemoComponent)
            .then((fixture:ComponentFixture) => {
                let container:DemoComponent = fixture.componentInstance;
                fixture.detectChanges();
                expect(container.dt).toBeTruthy();
                expect(container.dt.date).toEqual(container.date);

                // TODO: test update
                // let newDate = new Date(2017);
                // spyOn(container.dt, 'onChange').and.callThrough();
                // container.dt.dateChange.emit(newDate);
                // expect(container.dt.onChange).toHaveBeenCalledWith(newDate);
            });
    }));
});
