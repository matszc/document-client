import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public mockData;

  constructor() {
    this.mockData = [];
    for (let i = 0; i < 50; i++) {
      this.mockData.push(Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16) + '.docx');
    }
  }

  ngOnInit() {

  }

}
