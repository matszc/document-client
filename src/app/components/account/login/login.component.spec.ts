import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ProfileComponent} from '../profile/profile.component';
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
import {LoginData} from '../../../models/login';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {Router} from '@angular/router';

let authServiceStub: Partial<AuthService>;

authServiceStub = {
    login(data: LoginData): Observable<User> {
        return Observable.create(observer => {
            observer.next(
                {
                    token: 't',
                    login: data.identifier,
                    email: 'e',
                    role: 'r'
                }
            );
            observer.complete();
        });
    }
};

const router = {
    navigate: jasmine.createSpy('navigate')
};

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
                AppRoutingModule
            ],
            providers: [
                {provide: MessageService},
                {provide: AuthService, useValue: authServiceStub},
                {provide: Router, useValue: router}
            ]

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
    it(`should have enabledValidators variable set to false`, () => {
        expect(component.enabledValidators).toEqual(false);
    });
    it(`should have loading variable set to false`, () => {
        expect(component.loading).toEqual(false);
    });
    it(`should toggle both attribute values after calling onSubmit() method`, () => {
        component.ngOnInit();
        component.loginForm.controls['username'].setValue('testing');
        component.loginForm.controls['password'].setValue('testing');
        component.onSubmit(component.loginForm.value);
        expect(component.loading).toEqual(true);
        expect(component.enabledValidators).toEqual(true);
    });
});
