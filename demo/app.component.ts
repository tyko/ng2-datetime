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
    /*
        Remember if you crate new Date second parameter in Date constructor is month
        Integer value representing the month, beginning with 0 for January to 11 for December.

        So new Date(2016,3,4) is equal to 2016-04-04
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    */
    date:Date = new Date(2016,3,4);
    date2:Date = new Date(2016,3,4);
    date3;
    datepickerOpts = {
        startDate: new Date(2016,3,4);
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        format: 'D, d MM yyyy'
    };

    public getDate(dt):number {
        return dt && dt.getTime();
    }
}
