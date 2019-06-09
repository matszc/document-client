import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsRoutingModule} from './documents-routing.module';
import {ViewComponent} from './view/view.component';
import {SingleDocComponent} from './single-doc/single-doc.component';
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
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {DocumentMenuModule} from '../shared-components/document-menu/document-menu.module';
import { SendComponent } from './send/send.component';
import {SenderModule} from '../shared-components/sender/sender.module';
import {ViewerModule} from '../shared-components/viewer/viewer.module';
import {SingleViewerModule} from '../shared-components/single-viewer/single-viewer.module';

@NgModule({
    declarations: [
        ViewComponent,
        SingleDocComponent,
        SendComponent
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
        ProgressSpinnerModule,
        DocumentMenuModule,
        SenderModule,
        ViewerModule,
        SingleViewerModule
    ]
})
export class DocumentsModule {
}
