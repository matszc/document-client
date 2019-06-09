import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SenderComponent} from './sender.component';
import {AppModule} from '../../../app.module';
import {SenderModule} from './sender.module';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

const router = {
    navigate: jasmine.createSpy('navigate')
};

describe('SenderComponent', () => {
    let component: SenderComponent;
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestWrapperComponent],
            imports: [AppModule, SenderModule],
            providers: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SenderComponent);
        component = fixture.debugElement.children[0].componentInstance;
        component.isRegistered = true;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({
    selector: 'app-test-wrapper',
    template: '<app-sender [isRegistered]="true"></app-sender>'
})
class TestWrapperComponent {
}
