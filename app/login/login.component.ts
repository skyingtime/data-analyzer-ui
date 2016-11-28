import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user";
import {LoginService} from "./login.service";

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
})
export class LoginComponent {
    //user: User;
    userName :string;
    password:string;
    constructor(private loginService: LoginService, private router: Router) {}

    login(): void {
        console.log(this.userName + "  " + this.password);
        this.loginService.validateUserDetails(this.userName, this.password);


    }
}