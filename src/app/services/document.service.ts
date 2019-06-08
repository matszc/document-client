import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from '../config';
import {Observable} from 'rxjs';
import {Case} from '../models/case';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    public notLoggedInUserEmail: string;
    public tempUnregistredToken: string;

    constructor(private http: HttpClient) {
        this.notLoggedInUserEmail = '';
        this.tempUnregistredToken = '';
    }

    public getToken(mail) {
        return this.http.post(`${GLOBAL.URL}/unregistered/sendtoken/${mail}`, null);
    }

    public sendCase(data) {
        return this.http.post(`${GLOBAL.URL}/cases`, data);
    }

    public getCase(caseId): Observable<Case> {
        return this.http.get<Case>(`${GLOBAL.URL}/cases/${caseId}`);
    }

    public sendCaseUnregistred(email, data) {
        console.log(data);
        return this.http.post(`${GLOBAL.URL}/unregistered/cases/${email}`, data);
    }

    public editComment(caseId, comment) {
        return this.http.put(`${GLOBAL.URL}/cases/${caseId}`, comment);
    }

    public getCases(status): Observable<Array<Case>> {
        return this.http.get<Array<Case>>(`${GLOBAL.URL}/cases/type/${status}`);
    }

    public getCasesUnregistred() {
        return this.http.get(`${GLOBAL.URL}/unregistered/cases/${this.notLoggedInUserEmail}/${this.tempUnregistredToken}`);
    }

    public getCaseUnregistred(caseId) {
        return this.http.get(`${GLOBAL.URL}/unregistered/cases/${caseId}/${this.tempUnregistredToken}/${this.notLoggedInUserEmail}`);
    }
}
