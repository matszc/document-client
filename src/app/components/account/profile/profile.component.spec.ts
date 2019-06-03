import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../../home/home.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    AccordionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    MessageModule,
    MessageService,
    MessagesModule,
    PanelModule,
    PasswordModule,
    ProgressSpinnerModule
} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

let authServiceStub: Partial<AuthService>;

authServiceStub = {
    currentUserValue: {
        login: 'test'
    } as User
};

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProfileComponent,
                LoginComponent,
                HomeComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                InputTextModule,
                AppRoutingModule,
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
            ],
            providers: [
                {provide: MessageService},
                {provide: AuthService, useValue: authServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have userInfo attribute with value: test', () => {
        expect(component.userInfo.login).toEqual('test');
    });

});
