import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router, private messageService: MessageService) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // unauthorised
                this.authenticationService.logout();
                // this.toastr.error(err.error.message, 'Error!');
                this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.message});
                this.router.navigate(['/sign-in']);
            }
            if (err.status === 400) {
                // invalid credentials
                this.authenticationService.logout();
                this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.message});
                // this.toastr.error(err.error.message, 'Error!');
            }
            if (err.status === 419) {
                // does not exist
                this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.message});
            }
            if (err.status === 420) {
                // owner not found
                this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.message});
            }
            if (err.status === 667) {
                // owner not found
                this.messageService.add({severity: 'error', summary: 'Error', detail: err.error.message});
            }

            if (err.status === 409) {
                // wrong token
                this.messageService.add({severity: 'error', summary: 'Error', detail: 'Token Jest Nieaktulny'});
                this.router.navigate(['home/for-not-logged-in']);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }

}
