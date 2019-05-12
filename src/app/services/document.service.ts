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

  public getCase(caseId) {
    return this.http.get(`${GLOBAL.URL}/cases/${caseId}`);
  }

  public sendCaseUnregistred(email, data) {
    return this.http.post(`${GLOBAL.URL}/unregistered/cases/${email}`, data);
  }

   public editComment(caseId, comment) {
     return this.http.put(`${GLOBAL.URL}/cases/${caseId}`, comment);
   }


}
