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
    date:Date = new Date();
    date2:Date = new Date(2016, 6, 8, 10, 0);
    date3;

    public getDate(dt):number {
        return dt && dt.getTime();
    }
}
