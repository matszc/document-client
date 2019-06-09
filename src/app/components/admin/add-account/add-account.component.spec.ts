import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddAccountComponent} from './add-account.component';
import {Router} from '@angular/router';
import {AppModule} from '../../../app.module';
import {AdminModule} from '../admin.module';

const router = {
    navigate: jasmine.createSpy('navigate')
};

describe('AddAccountComponent', () => {
    let component: AddAccountComponent;
    let fixture: ComponentFixture<AddAccountComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, AdminModule],
            providers: [
                {provide: Router, useValue: router}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have roles array with specific values', () => {
        expect(component.roles).toEqual(['admin', 'skarga', 'podanie']);
    });

    it('should have loading attribute set to false', () => {
        expect(component.loading).toEqual(false);
    });

    it('should have enableValidators attribute set to false', () => {
        expect(component.enableValidators).toEqual(false);
    });

    it('should toggle enableValidators attribute after onSubmit() method', () => {
        component.onSubmit();
        expect(component.enableValidators).toEqual(true);
    });


});
