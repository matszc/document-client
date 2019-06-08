import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SendComponent} from './send.component';
import {DocumentMenuComponent} from '../../shared-components/document-menu/document-menu.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {HttpClient} from '@angular/common/http';

describe('SendComponenta', () => {
    let component: SendComponent;
    let fixture: ComponentFixture<SendComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SendComponent,
                DocumentMenuComponent
            ],
            imports: [
                AppRoutingModule,
                HttpClient
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SendComponent);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
