import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UploaderTaskComponent} from './uploader-task.component';
import {AppModule} from '../../../../app.module';
import {UploaderModule} from '../uploader.module';

describe('UploaderTaskComponent', () => {
    let component: UploaderTaskComponent;
    let fixture: ComponentFixture<UploaderTaskComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, UploaderModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UploaderTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
