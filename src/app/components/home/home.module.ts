import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {ButtonModule} from 'primeng/button';
import {
    CardModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MessageModule,
    PanelModule,
    ProgressSpinnerModule,
    TooltipModule
} from 'primeng/primeng';
import {ForNotLoggedInComponent} from './for-not-logged-in/for-not-logged-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SenderHomeComponent} from './for-not-logged-in/sender/sender.component';
import {UploaderHomeComponent} from './for-not-logged-in/uploader/uploader.component';
import {UploaderTaskHomeComponent} from './for-not-logged-in/uploader/uploader-task/uploader-task.component';
import {DialogModule} from 'primeng/dialog';
import {ViewHomeComponent} from './for-not-logged-in/view/view.component';
import {TileComponent} from './for-not-logged-in/view/tile/tile.component';
import {TableModule} from 'primeng/table';
import {SingleDocHomeComponent} from './for-not-logged-in/single-doc/single-doc.component';
import {DropzoneDirective} from './dropzone.directive';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [
        WelcomeComponent,
        ForNotLoggedInComponent,
        SenderHomeComponent,
        UploaderHomeComponent,
        UploaderTaskHomeComponent,
        ViewHomeComponent,
        TileComponent,
        SingleDocHomeComponent,
        DropzoneDirective,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        InputTextModule,
        PanelModule,
        CardModule,
        FormsModule,
        ReactiveFormsModule,
        MessageModule,
        DropdownModule,
        DialogModule,
        TableModule,
        TooltipModule,
        InputTextareaModule,
        ProgressSpinnerModule
    ]
})
export class HomeModule {
}
