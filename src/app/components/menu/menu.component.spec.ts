import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {DocumentMenuComponent} from '../documents/document-menu/document-menu.component';
import {HomeComponent} from '../home/home.component';
import {CommonModule} from '@angular/common';
import {MenubarModule, MessageService, TieredMenuModule} from 'primeng/primeng';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptor} from '../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../helpers/error.interceptor';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuComponent,
                HomeComponent
            ],
            imports: [
                CommonModule,
                TieredMenuModule,
                HttpClientModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MenubarModule
            ],
            providers: [
                MessageService,
                {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
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
