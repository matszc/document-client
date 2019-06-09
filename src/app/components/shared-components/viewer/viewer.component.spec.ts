import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ViewerComponent} from './viewer.component';
import {AppModule} from '../../../app.module';
import {ViewerModule} from './viewer.module';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {AdminService} from '../../../services/admin.service';
import {DocumentService} from '../../../services/document.service';
import {LoginData} from '../../../models/login';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';

let adminServiceStub: Partial<AdminService>;
let documentServiceStub: Partial<DocumentService>;
let authServiceStub: Partial<AuthService>;

authServiceStub = {
    /*currentUserValue(): User {
        return {
            id: 1,
            login: 'test',
            email: 'test@test.com',
            token: 'test',
            role: 'admin',
            userId: 54754745
        };
    }*/
};
/*spyOnProperty(authServiceStub, 'currentUserValue', 'get').and.returnValue({role: 'admin'});*/
const customCase = Observable.create(observer => {
    observer.next(
        [{
            comment: 'hahah',
            date: '2019-06-05T08:43:17.21',
            description: 'aaaaaa',
            id: '3',
            status: 'not considered',
            title: 'podanko',
            type: 'podanie',
            user_email: 'sfdhfdshdsf@dfghfd.com'
        }]
    );
    observer.complete();
});

adminServiceStub = {
    getCases(): Observable<Object> {
        return customCase;
    },
    getSpam(): Observable<Object> {
        return customCase;
    }
};

documentServiceStub = {
    getCases(status?): Observable<Object> {
        return Observable.create(observer => {
            observer.next(
                [{
                    comment: 'ojhj fdhhgdffdh',
                    date: '2019-06-08T15:52:52.893',
                    description: 'dssdg',
                    id: '13',
                    status: 'not considered',
                    title: 'ulalala',
                    type: 'skarga',
                    user_email: 'skarga@skarga.com'
                }]
            );
            observer.complete();
        });
    },
    getCaseUnregistred(caseId): Observable<Object> {
        return customCase;
    }
};

const router = {
    navigate: jasmine.createSpy('navigate')
};

describe('ViewerComponent', () => {
    let component: ViewerComponent;
    let fixture: ComponentFixture<ViewerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, ViewerModule],
            providers: [
                {provide: Router, useValue: router},
                {provide: AdminService, useValue: adminServiceStub},
                {provide: DocumentService, useValue: documentServiceStub},
                /*{provide: AuthService, useValue: authServiceStub},*/
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/

});
