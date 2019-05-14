import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-document-menu-admin',
  templateUrl: './document-menu.component.html',
  styleUrls: ['./document-menu.component.scss']
})
export class DocumentMenuAdminComponent implements OnInit {

  public items: MenuItem[];

  constructor(
      private router: Router,
      private authService: AuthService) { }

  ngOnInit() {
  this.items = [
    {label: 'Konta'},
    {label: 'Dokumenty'},
    {label: 'Moje konto'},
    {label: 'Dodaj konto'},
    {label: 'Wyjdź', command: () => this.router.navigate(['documents/view'])}
    ];
  }

}
