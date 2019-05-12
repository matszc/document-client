import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  public notLoggedInUserEmail: string;

  constructor(private http: HttpClient) {
    this.notLoggedInUserEmail = '';
  }

  public getToken(mail) {
    return this.http.post(`${GLOBAL.URL}/unregistered/sendtoken/${mail}`, null);
  }

  public sendCase(data) {
    return this.http.post(`${GLOBAL.URL}/cases`, data);
  }

  public sendCaseUnregistred(email, data) {
    return this.http.post(`${GLOBAL.URL}/unregistered/cases/${email}`, data);
  }


}
