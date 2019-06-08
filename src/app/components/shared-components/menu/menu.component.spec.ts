import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {CommonModule} from '@angular/common';
import {MenubarModule, MessageService, TieredMenuModule} from 'primeng/primeng';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuComponent
            ],
            imports: [
                CommonModule,
                TieredMenuModule,
                HttpClientModule,
                BrowserAnimationsModule,
                MenubarModule
            ],
            providers: [
                MessageService
            ],
        })
            .compileComponents();
    }));

    /*beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });*/
});
