import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Konto',
        icon: 'pi pi-fw pi-briefcase',
        command: () => this.router.navigate(['account/profile']),
        items: [
          {label: 'Mój Profil', icon: 'pi pi-fw pi-user', command: () => this.router.navigate(['account/profile'])},
          {label: 'Wyloguj', icon: 'pi pi-fw pi-sign-out', command: () => this.authService.logout()}
        ]
      }
    ];
  }

}
