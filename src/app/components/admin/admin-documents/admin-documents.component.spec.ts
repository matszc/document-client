import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdminDocumentsComponent} from './admin-documents.component';
import {AppModule} from '../../../app.module';
import {AdminModule} from '../admin.module';

describe('AdminDocumentsComponent', () => {
    let component: AdminDocumentsComponent;
    let fixture: ComponentFixture<AdminDocumentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, AdminModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminDocumentsComponent);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
        /*spiner = fixture.elementRef.nativeElement.querySelector('p-progressSpinner');*/
    });

    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
    /*it('should have progressSpinner at start', () => {
      expect(component.loading).toEqual(true);
      expect(spiner).toBeTruthy();
    });*/
});
