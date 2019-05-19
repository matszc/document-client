import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DocumentMenuAdminComponent} from './document-menu/document-menu.component';
import {InputTextModule, MessageModule, ProgressSpinnerModule, RadioButtonModule, TieredMenuModule} from 'primeng/primeng';
import { AdminDocumentsComponent } from './admin-documents/admin-documents.component';
import { AddAccountComponent } from './add-account/add-account.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditDialogComponent } from './users/edit-dialog/edit-dialog.component';



@NgModule({
    declarations: [
        UsersComponent,
        DocumentMenuAdminComponent,
        AdminDocumentsComponent,
        AddAccountComponent,
        EditDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TieredMenuModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    ProgressSpinnerModule,
    MessageModule
  ]
})
export class AdminModule {
}
