import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForNotLoggedInComponent} from './for-not-logged-in.component';
import {CommonModule} from '@angular/common';
import {DocumentsRoutingModule} from '../../documents/documents-routing.module';
import {PanelModule} from 'primeng/panel';
import {
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    MessageModule,
    MessageService,
    MessagesModule,
    ProgressSpinnerModule, TieredMenuModule,
    TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
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
import {WelcomeComponent} from '../welcome/welcome.component';

describe('ForNotLoggedInComponent', () => {
    let component: ForNotLoggedInComponent;
    let fixture: ComponentFixture<ForNotLoggedInComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ForNotLoggedInComponent,
                WelcomeComponent
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
        fixture = TestBed.createComponent(ForNotLoggedInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
