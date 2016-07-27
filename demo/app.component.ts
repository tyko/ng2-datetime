import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NKDatetime} from '../src/ng2-datetime/ng2-datetime';

@Component({
    selector: 'my-app',
    directives: [NKDatetime],
    pipes: [DatePipe],
    templateUrl: 'demo/app.component.html'
})
export class AppComponent {
    date: Date = new Date();
    date2: Date = new Date();
    date3;
    date4: Date = new Date();
    datepickerOpts: any = {
        startDate: new Date(),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        format: 'D, d MM yyyy'
    };
    date5 = new Date();
    dateFrom;
    dateTo;
    datepickerToOpts: any = {};

    handleDateFromChange(dateFrom) {
        // update the model
        this.dateFrom = dateFrom;

        // do not mutate the object or angular won't detect the changes
        this.datepickerToOpts = {
            startDate: dateFrom
        };
    }

    public getDate(dt): number {
        return dt && dt.getTime();
    }
}
