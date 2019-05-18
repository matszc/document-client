import {Component, OnInit, Injectable, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {DocumentService} from '../../../../services/document.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, OnDestroy {

  // public mockData;
  public cols: any[];
  public Cases: any;
  public statuts: any[];
  public types: any[];
  public loading: boolean;

  constructor(private router: Router, private document: DocumentService) {
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

  public viewDoc(id: string): void {
    this.router.navigate([`home/for-not-logged-in/view/${id}`]);
  }

  ngOnInit() {
    if (this.document.tempUnregistredToken === '' || this.document.notLoggedInUserEmail === '') {
      this.router.navigate(['home/for-not-logged-in']);
    } else {
      this.document.getCasesUnregistred().subscribe( (Cases) => {
        this.Cases = Cases;
        this.loading = false;
      });
    }
  }

  ngOnDestroy(): void {
  }


}
