import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
    private loginUrl = 'http://localhost:8090/api/validate';

    constructor(private http: Http, private router: Router) { }

    validateUserDetails(userName: string, password: string): void {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.loginUrl, {userName, password}, options).toPromise()
            .then(response=>{
                let link = ['/dashboard'];
                this.router.navigate(link);
            }).catch(error=> {console.log("failure")
                return error;
            });
    }
}