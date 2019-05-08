import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from '../config';
import {Cases} from '../models/case';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }
  getDocuments() {
    return this.http.get<Cases>(`${GLOBAL.URL}/Documents`);
  }

}
