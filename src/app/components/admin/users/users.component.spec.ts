import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {AppModule} from '../../../app.module';
import {AdminModule} from '../admin.module';
import {AdminService} from '../../../services/admin.service';
import {Observable, of} from 'rxjs';
import {User} from '../../../models/user';

let adminServiceStub: Partial<AdminService>;

adminServiceStub = {
    getActiveUsers(): Observable<User[]> {
        const users: User[] = [{
            id: 1,
            token: 't',
            login: 'l',
            email: 'e',
            role_name: 'r',
            role: 'r'
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
    it ('Dialogs should be hidden on start', () => {
      expect(component.displayEdit).toBeFalsy();
      expect(component.displayDelete).toBeFalsy();
    });
});
