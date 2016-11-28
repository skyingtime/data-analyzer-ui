import { NgModule }      from '@angular/core';
import {RouterModule}    from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'dashboard', component: DashboardComponent},
            { path: 'login', component: LoginComponent},
            { path: '', redirectTo: '/login', pathMatch: 'full'},
])
],
exports: [ RouterModule ]
})
export class AppRoutingModule {}
