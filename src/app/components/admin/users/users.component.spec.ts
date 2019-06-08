import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {CommonModule} from '@angular/common';
import {
    AccordionModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MessageModule,
    MessageService,
    PanelModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    TieredMenuModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptor} from '../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../helpers/error.interceptor';
import {DocumentMenuComponent} from '../../shared-components/document-menu/document-menu.component';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DocumentMenuComponent,
                UsersComponent,
                EditDialogComponent
            ],
            imports: [
                CommonModule,
                TieredMenuModule,
                TableModule,
                ButtonModule,
                DialogModule,
                CardModule,
                ReactiveFormsModule,
                InputTextModule,
                RadioButtonModule,
                FormsModule,
                ProgressSpinnerModule,
                MessageModule,
                DropdownModule,
                PanelModule,
                AccordionModule,
                HttpClientModule,
                AppRoutingModule,
                BrowserAnimationsModule,
            ],
            providers: [
                MessageService,
                {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
