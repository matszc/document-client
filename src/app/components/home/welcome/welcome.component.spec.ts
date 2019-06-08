import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
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
import {CommonModule} from '@angular/common';
import {DataViewModule} from 'primeng/dataview';
import {HomeRoutingModule} from '../home-routing.module';

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;

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
    /*beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
