import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Account',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Login', icon: 'pi pi-fw pi-sign-in'},
          {label: 'Register', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Logout', icon: 'pi pi-fw pi-sign-out'}
        ]
      }
    ];
  }

}
