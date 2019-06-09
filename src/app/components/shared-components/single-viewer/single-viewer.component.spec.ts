import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SingleViewerComponent} from './single-viewer.component';
import {AppModule} from '../../../app.module';
import {SingleViewerModule} from './single-viewer.module';

describe('SingleViewerComponent', () => {
    let component: SingleViewerComponent;
    let fixture: ComponentFixture<SingleViewerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, SingleViewerModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO
    /*it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
