import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DocumentMenuAdminComponent} from './document-menu/document-menu.component';
import {TieredMenuModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        UsersComponent,
        DocumentMenuAdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TieredMenuModule
    ]
})
export class AdminModule {
}
