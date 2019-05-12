import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsRoutingModule} from './documents-routing.module';
import {ViewComponent} from './view/view.component';
import {SingleDocComponent} from './single-doc/single-doc.component';
import {TileComponent} from './view/tile/tile.component';
import {SendComponent} from './send/send.component';
import {UploaderComponent} from './send/uploader/uploader.component';
import {UploaderTaskComponent} from './send/uploader/uploader-task/uploader-task.component';
import {PanelModule} from 'primeng/panel';
import {
    ButtonModule,
    CardModule,
    DropdownModule, InputTextareaModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    TieredMenuModule,
    TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {DocumentMenuComponent} from '../document-menu/document-menu.component';
import {DropzoneDirective} from '../../dropzone.directive';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {SenderComponent} from './send/sender/sender.component';

@NgModule({
    declarations: [
        ViewComponent,
        SingleDocComponent,
        TileComponent,
        SendComponent,
        UploaderComponent,
        UploaderTaskComponent,
        DocumentMenuComponent,
        DropzoneDirective,
        SenderComponent
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
    InputTextareaModule
  ]
})
export class DocumentsModule {
}
