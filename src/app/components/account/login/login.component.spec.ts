import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ProfileComponent} from '../profile/profile.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    AccordionModule,
    ButtonModule, CardModule,
    InputTextModule,
    MessageModule, MessageService,
    MessagesModule,
    PanelModule,
    PasswordModule,
    ProgressSpinnerModule
} from 'primeng/primeng';
import {AccountRoutingModule} from '../account-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {HomeComponent} from '../../home/home.component';
import {JwtInterceptor} from '../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../helpers/error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProfileComponent,
                LoginComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                InputTextModule,
                MessagesModule,
                MessageModule,
                PasswordModule,
                ButtonModule,
                PanelModule,
                ProgressSpinnerModule,
                AccordionModule,
                CardModule,
                HttpClientModule,
                BrowserAnimationsModule,
                AppRoutingModule,
            ],
            providers: [
                MessageService,
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
