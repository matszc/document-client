import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SenderHomeComponent} from './sender.component';
import {ForNotLoggedInComponent} from '../for-not-logged-in.component';
import {SendComponent} from '../../../documents/send/send.component';
import {UploaderHomeComponent} from '../uploader/uploader.component';
import {UploaderTaskHomeComponent} from '../uploader/uploader-task/uploader-task.component';
import {TileComponent} from '../view/tile/tile.component';
import {ViewComponent} from '../../../documents/view/view.component';
import {SingleDocComponent} from '../../../documents/single-doc/single-doc.component';
import {HomeComponent} from '../../home.component';
import {CommonModule} from '@angular/common';
import {DocumentsRoutingModule} from '../../../documents/documents-routing.module';
import {PanelModule} from 'primeng/panel';
import {
    ButtonModule, CardModule, DialogModule,
    DropdownModule, InputTextareaModule,
    InputTextModule,
    MessageModule, MessageService,
    MessagesModule, ProgressSpinnerModule,
    TieredMenuModule,
    TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {JwtInterceptor} from '../../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../../helpers/error.interceptor';
import {SenderComponent} from '../../../documents/send/sender/sender.component';
import {UploaderComponent} from '../../../documents/send/uploader/uploader.component';
import {UploaderTaskComponent} from '../../../documents/send/uploader/uploader-task/uploader-task.component';
import {DocumentMenuComponent} from '../../../documents/document-menu/document-menu.component';
import {HomeRoutingModule} from '../../home-routing.module';
import {WelcomeComponent} from '../../welcome/welcome.component';
import {ViewHomeComponent} from '../view/view.component';
import {SingleDocHomeComponent} from '../single-doc/single-doc.component';

describe('SenderHomeComponent', () => {
    let component: SenderHomeComponent;
    let fixture: ComponentFixture<SenderHomeComponent>;

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

    beforeEach(() => {
        fixture = TestBed.createComponent(SenderHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
