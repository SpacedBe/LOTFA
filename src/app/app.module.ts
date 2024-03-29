import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
