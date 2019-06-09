import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DocumentMenuComponent} from './document-menu.component';
import {AppModule} from '../../../app.module';
import {DocumentMenuModule} from './document-menu.module';

describe('DocumentMenuComponent', () => {
    let component: DocumentMenuComponent;
    let fixture: ComponentFixture<DocumentMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, DocumentMenuModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DocumentMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
