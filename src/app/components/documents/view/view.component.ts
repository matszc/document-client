import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {DocumentService} from '../../../services/document.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

  // public mockData;
  public cols: any[];
  public Cases: any;

  constructor(private router: Router, private document: DocumentService) {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'title', header: 'Tytul'},
      {field: 'date', header: 'Data Wysłania'},
      {field: 'type', header: 'Typ'},
      {field: 'status', header: 'Status'}
    ];
/*    this.mockData = [];
    for (let i = 0; i < 50; i++) {
      this.mockData.push( {
        title: Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16) + '.docx',
        id: Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)
      });
    }*/
  }

  ngOnInit() {
    this.document.getCases().subscribe( (Cases) => {
      this.Cases = Cases;
    });

  }
  public viewDoc(id: string): void {
    this.router.navigate([`documents/view/${id}`]);
  }

}
