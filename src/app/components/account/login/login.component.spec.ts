import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthService} from '../../../services/auth.service';
import {LoginData} from '../../../models/login';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {Router} from '@angular/router';
import {AccountModule} from '../account.module';
import {AppModule} from '../../../app.module';

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
            declarations: [],
            imports: [AppModule, AccountModule],
            providers: [
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
