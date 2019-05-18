import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {ButtonModule, InputTextModule, MessageModule, MessagesModule, PanelModule, ProgressSpinnerModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    AccountRoutingModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    PanelModule,
    ProgressSpinnerModule,
  ]
})
export class AccountModule { }
