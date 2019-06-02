import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule, InputTextModule, MessageModule, MessagesModule, PanelModule, ProgressSpinnerModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {AccountComponent} from './account.component';

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent,
        AccountComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        AccountRoutingModule,
        MessagesModule,
        MessageModule,
        PasswordModule,
        ButtonModule,
        PanelModule,
        ProgressSpinnerModule,
        AccordionModule,
        CardModule,
    ]
})
export class AccountModule {
}
