import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SendComponent} from './send.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';
import {UnregisteredModule} from '../unregistered.module';

describe('SendComponent', () => {
    let component: SendComponent;
    let fixture: ComponentFixture<SendComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, UnregisteredModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SendComponent);
        component = fixture.debugElement.children[0].componentInstance;
        component.isRegistered = true;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
