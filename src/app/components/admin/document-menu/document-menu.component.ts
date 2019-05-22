import {Component, OnInit} from '@angular/core';
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
        private authService: AuthService) {
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Dokument',
                icon: 'pi pi-fw pi-file',
                command: () => this.router.navigate(['documents']),
                items: [
                    {
                        label: 'Nowy',
                        icon: 'pi pi-fw pi-plus',
                        command: () => this.router.navigate(['documents/send'])
                    },
                    {
                        label: 'Moje sprawy',
                        icon: 'pi pi-fw pi-list',
                        command: () => this.router.navigate(['documents/view'])
                    }
                ]
            },
            {
                label: 'Exit',
                icon: 'pi pi-fw pi-power-off',
                command: () => this.authService.logout()
            }
        ];
        if (this.authService.currentUserValue.role === 'admin') {
            this.items.splice(1, 0, {
                label: 'Admin',
                icon: 'pi pi-fw pi-sitemap',
                command: () => this.router.navigate(['/admin']),
                items: [
                    {
                        label: 'Konta',
                        icon: 'pi pi-fw pi-users',
                        command: () => this.router.navigate(['/admin/users'])
                    },
                    {
                        label: 'Dokumenty',
                        icon: 'pi pi-fw pi-list',
                        command: () => this.router.navigate((['/admin/documents']))
                    },
                    {
                        label: 'Dodaj konto',
                        icon: 'pi pi-fw pi-user-plus',
                        command: () => this.router.navigate(['admin/add-account'])
                    },
                ]
            });
        }
    }

}
