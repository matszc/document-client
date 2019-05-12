import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

  public mockData;
  public cols: any[];

  constructor(private router: Router) {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'title', header: 'Title'}
    ];
    this.mockData = [];
    for (let i = 0; i < 50; i++) {
      this.mockData.push( {
        title: Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16) + '.docx',
        id: Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)
      });
    }
  }

  ngOnInit() {

  }
  public viewDoc(id: string): void {
    this.router.navigate([`documents/view/${id}`]);
  }

}
