import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-document-menu',
  templateUrl: './document-menu.component.html',
  styleUrls: ['./document-menu.component.scss']
})
export class DocumentMenuComponent implements OnInit {

  public items: MenuItem[];

  constructor(
      private router: Router,
      private authService: AuthService) { }

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
          {label: 'Moje sprawy', command: () => this.router.navigate(['documents/view'])
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
    if (this.authService.currentUserValue.role === 'admin') {
      this.items.splice(2, 0, {
        label: 'Panel Administracyjny',
        command: () => this.router.navigate(['/admin']),
        items: [
          {label: 'Konta', command: () => this.router.navigate(['/admin/users'])},
          {label: 'Dokumenty'},
          {label: 'Moje konto'},
          {label: 'Dodaj konto'}
        ]
      });
    }
  }

}
