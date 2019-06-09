import {Injectable} from '@angular/core';
import {GLOBAL} from '../config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Case} from '../models/case';
import {UpdateUser} from '../models/update-user';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) {
    }

    public getActiveUsers(): Observable<Array<User>> {
        return this.http.get<User[]>(`${GLOBAL.URL}/users/activeUsers`);
    }

    public addUser(user: User): Observable<User> {
        return this.http.post<User>(`${GLOBAL.URL}/users/registration`, user);
    }

    public updateUser(email: string, user: UpdateUser): Observable<UpdateUser> {
      return this.http.put<UpdateUser>(`${GLOBAL.URL}/users/admin/${email}`, user);
    }

    public getCases(): Observable<Case[]> {
        return this.http.get<Case[]>(`${GLOBAL.URL}/cases/admin`);
    }
    public updateUser1(email: string, user: UpdateUser): Observable<UpdateUser> {
      return this.http.put<UpdateUser>(`${GLOBAL.URL}/users/${email}`, user);
    }
    public getSpam(): Observable<Case[]> {
      return this.http.get<Case[]>(`https://document-server2api20190604091530.azurewebsites.net/spam`);
    }
    public dropUser(email: string): Observable<User> {
      return this.http.put<User>(`${GLOBAL.URL}/Users/dropUser/${email}`, {});
    }
}
