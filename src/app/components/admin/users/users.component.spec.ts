import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {AppModule} from '../../../app.module';
import {AdminModule} from '../admin.module';
import {AuthService} from '../../../services/auth.service';
import {AdminService} from '../../../services/admin.service';
import {Observable, of} from 'rxjs';

let adminServiceStub: Partial<AdminService>;

adminServiceStub = {
    getActiveUsers(): Observable<Object> {
        const users = [{
            id: 1,
            token: 't',
            login: 'l',
            email: 'e',
            role_name: 'r'
        }];
        return of(users);
    }
};

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, AdminModule],
            providers: [
                {provide: AdminService, useValue: adminServiceStub},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
