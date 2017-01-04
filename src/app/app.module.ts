import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { NKDatetimeModule } from '../ng2-datetime/ng2-datetime.module';

@NgModule({
    imports: [BrowserModule, FormsModule, NKDatetimeModule],
    bootstrap: [AppComponent],
    declarations: [AppComponent]
})
export class AppModule {
}