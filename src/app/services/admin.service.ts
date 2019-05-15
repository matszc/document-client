import { Injectable } from '@angular/core';
import {GLOBAL} from '../config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  public getActiveUsers() {
    return this.http.get(`${GLOBAL.URL}/users/activeUsers`);
  }
  public addUser(user: any) {
    return this.http.post(`${GLOBAL.URL}/users/registration`, user);
  }
}
