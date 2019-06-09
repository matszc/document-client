import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DropdownModule, InputTextModule, MessageModule, ProgressSpinnerModule, RadioButtonModule, TieredMenuModule} from 'primeng/primeng';
import {AdminDocumentsComponent} from './admin-documents/admin-documents.component';
import {AddAccountComponent} from './add-account/add-account.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditDialogComponent} from './users/edit-dialog/edit-dialog.component';
import {DocumentMenuModule} from '../shared-components/document-menu/document-menu.module';
import {ViewerModule} from '../shared-components/viewer/viewer.module';


@NgModule({
    declarations: [
        UsersComponent,
        AdminDocumentsComponent,
        AddAccountComponent,
        EditDialogComponent
    ],
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
        MessageModule,
        DropdownModule,
        DocumentMenuModule,
        ViewerModule
    ]
})
export class AdminModule {
}
