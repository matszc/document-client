import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {AccountComponent} from './components/account/account.component';
import {LoginComponent} from './components/account/login/login.component';
import {ProfileComponent} from './components/account/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        AccountComponent,
        LoginComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonModule,
        MenubarModule,
        PanelModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MessagesModule,
        MessageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
