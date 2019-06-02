import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from '../home.component';
import {HomeModule} from '../home.module';
import {
    ButtonModule, CardModule, DialogModule,
    DropdownModule, InputTextareaModule, InputTextModule,
    MenubarModule,
    MessageModule,
    MessageService,
    MessagesModule,
    PanelModule,
    ProgressSpinnerModule, TieredMenuModule, TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {JwtInterceptor} from '../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../helpers/error.interceptor';
import {ForNotLoggedInComponent} from '../for-not-logged-in/for-not-logged-in.component';
import {SendComponent} from '../../documents/send/send.component';
import {SenderHomeComponent} from '../for-not-logged-in/sender/sender.component';
import {UploaderHomeComponent} from '../for-not-logged-in/uploader/uploader.component';
import {UploaderTaskHomeComponent} from '../for-not-logged-in/uploader/uploader-task/uploader-task.component';
import {TileComponent} from '../for-not-logged-in/view/tile/tile.component';
import {ViewComponent} from '../../documents/view/view.component';
import {SingleDocComponent} from '../../documents/single-doc/single-doc.component';
import {SenderComponent} from '../../documents/send/sender/sender.component';
import {UploaderComponent} from '../../documents/send/uploader/uploader.component';
import {UploaderTaskComponent} from '../../documents/send/uploader/uploader-task/uploader-task.component';
import {DocumentMenuComponent} from '../../documents/document-menu/document-menu.component';
import {CommonModule} from '@angular/common';
import {DocumentsRoutingModule} from '../../documents/documents-routing.module';
import {DataViewModule} from 'primeng/dataview';
import {ViewHomeComponent} from '../for-not-logged-in/view/view.component';
import {HomeRoutingModule} from '../home-routing.module';
import {SingleDocHomeComponent} from '../for-not-logged-in/single-doc/single-doc.component';

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ForNotLoggedInComponent,
                SenderHomeComponent,
                UploaderHomeComponent,
                UploaderTaskHomeComponent,
                TileComponent,
                HomeComponent,
                WelcomeComponent,
                ViewHomeComponent,
                SingleDocHomeComponent
            ],
            imports: [
                CommonModule,
                PanelModule,
                TooltipModule,
                MessagesModule,
                MessageModule,
                DropdownModule,
                ButtonModule,
                FormsModule,
                ReactiveFormsModule,
                InputTextModule,
                DataViewModule,
                TableModule,
                InputTextareaModule,
                ProgressSpinnerModule,
                HttpClientModule,
                HomeRoutingModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
                AngularFireStorageModule,
                CardModule,
                DialogModule,
                TieredMenuModule
            ],
            providers: [
                MessageService,
                {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
            ],
        })
            .compileComponents();
    }));

    // TODO Error: Cannot find module './components/home/home.module'
    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
