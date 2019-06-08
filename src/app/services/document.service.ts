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

    public sendCase(data): Observable<Case> {
        return this.http.post<Case>(`${GLOBAL.URL}/cases`, data);
    }

    public getCase(caseId): Observable<Case> {
        return this.http.get<Case>(`${GLOBAL.URL}/cases/${caseId}`);
    }

    public sendCaseUnregistred(email, data): Observable<Case> {
        return this.http.post<Case>(`${GLOBAL.URL}/unregistered/cases/${email}`, data);
    }

    public editComment(caseId, comment): Observable<Case> {
        return this.http.put<Case>(`${GLOBAL.URL}/cases/${caseId}`, comment);
    }

    public getCases(status): Observable<Case[]> {
        return this.http.get<Case[]>(`${GLOBAL.URL}/cases/type/${status}`);
    }

    public getCasesUnregistred(): Observable<Case[]> {
        return this.http.get<Case[]>(`${GLOBAL.URL}/unregistered/cases/${this.notLoggedInUserEmail}/${this.tempUnregistredToken}`);
    }

    public getCaseUnregistred(caseId): Observable<Case> {
        return this.http.get<Case>(`${GLOBAL.URL}/unregistered/cases/${caseId}/${this.tempUnregistredToken}/${this.notLoggedInUserEmail}`);
    }
}
