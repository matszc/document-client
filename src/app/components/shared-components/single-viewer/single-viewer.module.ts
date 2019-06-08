import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleViewerComponent} from './single-viewer.component';
import {PanelModule} from 'primeng/panel';
import {UploaderModule} from '../uploader/uploader.module';
import {ButtonModule, DropdownModule, InputTextareaModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        SingleViewerComponent
    ],
    imports: [
        CommonModule,
        PanelModule,
        UploaderModule,
        DropdownModule,
        InputTextareaModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SingleViewerComponent
    ]
})
export class SingleViewerModule {
}
