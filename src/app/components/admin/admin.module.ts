import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DocumentMenuAdminComponent} from './document-menu/document-menu.component';
import {TieredMenuModule} from 'primeng/primeng';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';
import { AddAccountComponent } from './add-account/add-account.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';



@NgModule({
    declarations: [
        UsersComponent,
        DocumentMenuAdminComponent,
        AdminDocumentsComponent,
        AddAccountComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TieredMenuModule,
        TableModule,
        ButtonModule,
        DialogModule
    ]
})
export class AdminModule {
}
