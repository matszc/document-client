import {Injectable} from '@angular/core';
import {GLOBAL} from '../config';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) {
    }

    public getActiveUsers() {
        return this.http.get(`${GLOBAL.URL}/users/activeUsers`);
    }

    public addUser(user: any) {
        return this.http.post(`${GLOBAL.URL}/users/registration`, user);
    }

    public updateUser(email: string, user) {
      return this.http.put(`${GLOBAL.URL}/users/admin/${email}`, user);
    }

    public getCases() {
        return this.http.get(`${GLOBAL.URL}/cases/admin`);
    }
    public updateUser1(email: string, user) {
      return this.http.put(`${GLOBAL.URL}/users/${email}`, user);
    }
    public getSpam() {
      return this.http.get(`https://localhost:44397/spam`);
    }
    public dropUser(email: string) {
      return this.http.put(`${GLOBAL.URL}/Users/dropUser/${email}`, {});
    }
}
