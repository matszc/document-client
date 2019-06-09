import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfileComponent} from './profile.component';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';
import {AppModule} from '../../../app.module';
import {AccountModule} from '../account.module';

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
            declarations: [],
            imports: [AppModule, AccountModule],
            providers: [
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
