import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-document-menu',
  templateUrl: './document-menu.component.html',
  styleUrls: ['./document-menu.component.scss']
})
export class DocumentMenuComponent implements OnInit {

  public items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Document', command: () => this.router.navigate(['documents/send'])},
            {label: 'Other'},
          ]
        },
          {label: 'View',
            items: [
                {label: 'My Documents', command: () => this.router.navigate(['documents/view'])}
              ]
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {label: 'Quit'}
    ];
  }

}
