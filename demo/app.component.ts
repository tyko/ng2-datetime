import {Component} from 'angular2/core';
import {Control, DatePipe} from 'angular2/common';
import {NKDatetime} from '../src/ng2-datetime/ng2-datetime';

@Component({
    selector: 'my-app',
    directives: [NKDatetime],
    pipes: [DatePipe],
    templateUrl: 'demo/app.component.html'
})
export class AppComponent {
    date:Date = new Date();
    date2:Date = new Date('2016-06-08 10:00:00');
    date3:Date = new Date('2016-09-12 23:30:00');
    date4;

    public getDate(dt):number {
        return dt && dt.getTime();
    }
}
