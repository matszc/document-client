import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // unauthorised
                this.authenticationService.logout();
                // this.toastr.error(err.error.message, 'Error!');
                this.router.navigate(['/sign-in']);
            }
            if (err.status === 400) {
                // invalid credentials
                this.authenticationService.logout();
                // this.toastr.error(err.error.message, 'Error!');
            }
            if (err.status === 419) {
                // does not exist
                // this.toastr.error(err.error.message, 'Error!');
            }
            if (err.status === 420) {
                // owner not found
                // this.toastr.error(err.error.message, 'Error!');
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }

}
