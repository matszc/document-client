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
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';

@NgModule({
    declarations: [
        WelcomeComponent,
        ForNotLoggedInComponent
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
