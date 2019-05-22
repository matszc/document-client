import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Konto',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {label: 'Zaloguj', icon: 'pi pi-fw pi-sign-in', routerLink: ['account/login']},
          {label: 'Mój Profil', icon: 'pi pi-fw pi-user', routerLink: ['account/profile']},
          {label: 'Wyloguj', icon: 'pi pi-fw pi-sign-out', command: () => this.authService.logout()}
        ]
      }
    ];
  }

}
