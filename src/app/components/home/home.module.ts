import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {ButtonModule} from 'primeng/button';
import {CardModule, DropdownModule, InputTextModule, MessageModule, PanelModule} from 'primeng/primeng';
import { ForNotLoggedInComponent } from './for-not-logged-in/for-not-logged-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SenderComponent} from './for-not-logged-in/sender/sender.component';
import {UploaderComponent} from './for-not-logged-in/uploader/uploader.component';
import {UploaderTaskComponent} from './for-not-logged-in/uploader/uploader-task/uploader-task.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    declarations: [
        WelcomeComponent,
        ForNotLoggedInComponent,
        SenderComponent,
        UploaderComponent,
        UploaderTaskComponent],
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
        DialogModule
    ]
})
export class HomeModule {
}
