import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleDocComponent} from './single-doc/single-doc.component';
import {ViewComponent} from './view/view.component';
import {SendComponent} from './send/send.component';
import {PanelModule} from 'primeng/panel';
import {
    ButtonModule,
    DropdownModule, InputTextareaModule,
    InputTextModule,
    MessageModule,
    MessagesModule, ProgressSpinnerModule,
    TieredMenuModule,
    TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {UnregisteredRoutingModule} from './unregistered-routing.module';
import {SenderModule} from '../shared-components/sender/sender.module';
import {UploaderModule} from '../shared-components/uploader/uploader.module';
import {ViewerModule} from '../shared-components/viewer/viewer.module';
import {SingleViewerModule} from '../shared-components/single-viewer/single-viewer.module';

@NgModule({
    declarations: [
        SingleDocComponent,
        ViewComponent,
        SendComponent
    ],
    imports: [
        CommonModule,
        UnregisteredRoutingModule,
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
        SenderModule,
        UploaderModule,
        ViewerModule,
        SingleViewerModule
    ]
})
export class UnregisteredModule {
}
