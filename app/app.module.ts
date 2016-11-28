import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule }   from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginService} from "./login/login.service";

@NgModule({
    imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [AppComponent, LoginComponent, DashboardComponent],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }