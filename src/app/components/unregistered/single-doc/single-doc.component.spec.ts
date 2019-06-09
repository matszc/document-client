import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SingleDocComponent} from './single-doc.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';
import {UnregisteredModule} from '../unregistered.module';

describe('SingleDocComponent', () => {
    let component: SingleDocComponent;
    let fixture: ComponentFixture<SingleDocComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, UnregisteredModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleDocComponent);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
