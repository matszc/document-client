import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {ButtonModule} from 'primeng/button';
import {CardModule, InputTextModule, MessageModule, PanelModule} from 'primeng/primeng';
import { ForNotLoggedInComponent } from './for-not-logged-in/for-not-logged-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [WelcomeComponent, ForNotLoggedInComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        InputTextModule,
        PanelModule,
        CardModule,
        FormsModule,
        ReactiveFormsModule,
        MessageModule
    ]
})
export class HomeModule {
}
