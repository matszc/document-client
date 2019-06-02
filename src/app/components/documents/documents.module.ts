import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsRoutingModule} from './documents-routing.module';
import {ViewComponent} from './view/view.component';
import {SingleDocComponent} from './single-doc/single-doc.component';
import {SendComponent} from './send/send.component';
import {UploaderComponent} from './send/uploader/uploader.component';
import {UploaderTaskComponent} from './send/uploader/uploader-task/uploader-task.component';
import {PanelModule} from 'primeng/panel';
import {
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    ProgressSpinnerModule,
    TieredMenuModule,
    TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DocumentMenuComponent} from './document-menu/document-menu.component';
import {DropzoneDirective} from './dropzone.directive';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {SenderComponent} from './send/sender/sender.component';
import {DocumentsComponent} from './documents.component';

@NgModule({
    declarations: [
        ViewComponent,
        SingleDocComponent,
        SendComponent,
        UploaderComponent,
        UploaderTaskComponent,
        DocumentMenuComponent,
        SenderComponent,
        DropzoneDirective,
        DocumentsComponent
    ],
    imports: [
        CommonModule,
        DocumentsRoutingModule,
        PanelModule,
        TooltipModule,
        MessagesModule,
        MessageModule,
        DropdownModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TieredMenuModule,
        InputTextModule,
        DataViewModule,
        TableModule,
        InputTextareaModule,
        ProgressSpinnerModule
    ]
})
export class DocumentsModule {
}
