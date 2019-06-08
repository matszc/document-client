import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DocumentService} from '../../../services/document.service';
import {AuthService} from '../../../services/auth.service';
import {AdminService} from '../../../services/admin.service';
import {Case} from '../../../models/case';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
  public cols: any[];
  public Cases: Array<Case>;
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
    const role = this.authService.currentUserValue ? this.authService.currentUserValue.role : '';
    if (role !== 'admin') {
      this.document.getCases(role).subscribe( (cases: Array<Case>) => {
        this.Cases = cases;
        this.loading = false;
      });
    } else {
      this.adminService.getCases().subscribe( (Cases) => {
        this.Cases = Cases;
        this.loading = false;
      });
    }


  }
  public viewDoc(id: string): void {
    this.router.navigate([`documents/view/${id}`]);
  }

}
