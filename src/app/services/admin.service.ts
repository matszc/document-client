import {Injectable} from '@angular/core';
import {GLOBAL} from '../config';
import {HttpClient} from '@angular/common/http';
import {RegisterData} from '../models/register';
import {Observable} from 'rxjs';
import {Case} from '../models/case';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) {
    }

    public getActiveUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(`${GLOBAL.URL}/users/activeUsers`);
    }

    public addUser(user: RegisterData): Observable<RegisterData> {
        return this.http.post<RegisterData>(`${GLOBAL.URL}/users/registration`, user);
    }

    public updateUser(email: string, user) {
      return this.http.put(`${GLOBAL.URL}/users/admin/${email}`, user);
    }

    public getCases(): Observable<Array<Case>> {
        return this.http.get<Array<Case>>(`${GLOBAL.URL}/cases/admin`);
    }
    public updateUser1(email: string, user) {
      return this.http.put(`${GLOBAL.URL}/users/${email}`, user);
    }
    public getSpam(): Observable<Array<Case>> {
      return this.http.get<Array<Case>>(`https://document-server2api20190604091530.azurewebsites.net/spam`);
    }
    public dropUser(email: string) {
      return this.http.put(`${GLOBAL.URL}/Users/dropUser/${email}`, {});
    }
}
