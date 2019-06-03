import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TileComponent} from './tile.component';
import {HomeComponent} from '../../../home.component';
import {PanelModule} from 'primeng/panel';
import {
    ButtonModule,
    CardModule, DialogModule,
    DropdownModule, InputTextareaModule, InputTextModule,
    MessageModule,
    MessageService,
    MessagesModule,
    ProgressSpinnerModule, TieredMenuModule, TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {JwtInterceptor} from '../../../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../../../helpers/error.interceptor';
import {HomeModule} from '../../../home.module';
import {ForNotLoggedInComponent} from '../../for-not-logged-in.component';
import {SendComponent} from '../../../../documents/send/send.component';
import {SenderHomeComponent} from '../../sender/sender.component';
import {UploaderHomeComponent} from '../../uploader/uploader.component';
import {UploaderTaskHomeComponent} from '../../uploader/uploader-task/uploader-task.component';
import {DocumentMenuComponent} from '../../../../documents/document-menu/document-menu.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from '../../../home-routing.module';
import {DataViewModule} from 'primeng/dataview';
import {WelcomeComponent} from '../../../welcome/welcome.component';
import {ViewHomeComponent} from '../view.component';
import {SingleDocHomeComponent} from '../../single-doc/single-doc.component';

describe('TileComponent', () => {
    let component: TileComponent;
    let fixture: ComponentFixture<TileComponent>;

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
        fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
