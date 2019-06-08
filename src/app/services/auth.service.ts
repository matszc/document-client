import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map} from 'rxjs/operators';

import {User} from '../models/user';
import {GLOBAL} from '../config';
import {LoginData} from '../models/login';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';


@Injectable({providedIn: 'root'})
export class AuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public loading: boolean;


    constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.loading = false;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public login(data: LoginData): Observable<User> {
        return this.http.post<User>(`${GLOBAL.URL}/users/Login`, data)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    console.log(user);
                    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Zalogowano'});
                    this.loading = false;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }
    public logout(): void {
        if (this.currentUserValue) {
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            this.messageService.add({severity: 'warn', summary: 'Uwaga', detail: 'Użytkownik wylogowany'});
            this.router.navigate(['']);
        }

    }
}
