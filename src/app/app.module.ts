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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HomeComponent } from './components/home/home.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { DocumentMenuComponent } from './components/document-menu/document-menu.component';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import { DocumentsComponent } from './components/documents/documents.component';
import { SendComponent } from './components/documents/send/send.component';
import { ViewComponent } from './components/documents/view/view.component';
import {DropdownModule} from 'primeng/dropdown';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { UploaderComponent } from './components/documents/send/uploader/uploader.component';
import { UploaderTaskComponent } from './components/documents/send/uploader/uploader-task/uploader-task.component';
import {DropzoneDirective} from './dropzone.directive';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TileComponent } from './components/documents/view/tile/tile.component';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        AccountComponent,
        LoginComponent,
        ProfileComponent,
        HomeComponent,
        DocumentMenuComponent,
        DocumentsComponent,
        SendComponent,
        ViewComponent,
        UploaderComponent,
        UploaderTaskComponent,
        DropzoneDirective,
        TileComponent
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
        MessageModule,
        TieredMenuModule,
        CardModule,
        ToastModule,
        DropdownModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        InputTextareaModule,
        TooltipModule
    ],
    providers: [
        MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
/*        { provide: StorageBucket, useValue: 'my-bucket-name' }*/
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
