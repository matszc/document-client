import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DocumentService} from '../../../services/document.service';
import {AuthService} from '../../../services/auth.service';
import {AdminService} from '../../../services/admin.service';
import {Case} from '../../../models/case';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-documents',
  templateUrl: './admin-documents.component.html',
  styleUrls: ['./admin-documents.component.scss']
})
export class AdminDocumentsComponent implements OnInit {

  public cols: any[];
  public Cases: Case[];
  public statuts: any[];
  public types: any[];
  public loading: boolean;

  constructor(private router: Router,
              private document: DocumentService,
              private authService: AuthService,
              private adminService: AdminService) {
    this.loading = true;
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'title', header: 'Tytul'},
      {field: 'date', header: 'Data Wysłania'},
      {field: 'type', header: 'Typ'},
      {field: 'status', header: 'Status'}
    ];
    this.statuts = [
      { label: 'Wszystkie', value: null},
      { label: 'Nierozpatrzone', value: 'not considered'},
      { label: 'Rozpatrzone', value: 'considered'}
    ];
    this.types = [
      { label: 'Wszystkie', value: null},
      { label: 'skarga', value: 'skarga'},
      { label: 'podanie', value: 'podanie'}
    ];
  }

  ngOnInit() {
      this.adminService.getSpam().subscribe( (cases: Array<Case>) => {
        this.Cases = [...cases];
        this.loading = false;
      });
  }
  public viewDoc(id: string): void {
    this.router.navigate([`documents/view/${id}`]);
  }

}
