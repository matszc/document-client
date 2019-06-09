import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UploaderComponent} from './uploader.component';
import {AppModule} from '../../../app.module';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {UploaderModule} from './uploader.module';

const router = {
    navigate: jasmine.createSpy('navigate')
};

describe('UploaderComponent', () => {
    let component: UploaderComponent;
    let fixture: ComponentFixture<UploaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, UploaderModule],
            providers: [
                {provide: Router, useValue: router},
                {
                    provide: ActivatedRoute, useValue: {
                        params: of({id: 1})
                    }
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UploaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
