import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddAccountComponent} from './add-account.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from '../../account/login/login.component';
import {ProfileComponent} from '../../account/profile/profile.component';
import {HomeComponent} from '../../home/home.component';
import {DocumentMenuAdminComponent} from '../document-menu/document-menu.component';
import {TableModule} from 'primeng/table';
import {UsersComponent} from '../users/users.component';
import {AdminDocumentsComponent} from '../admin-documents/admin-documents.component';
import {EditDialogComponent} from '../users/edit-dialog/edit-dialog.component';
import {Router} from '@angular/router';

const router = {
    navigate: jasmine.createSpy('navigate')
};

describe('AddAccountComponent', () => {
    let component: AddAccountComponent;
    let fixture: ComponentFixture<AddAccountComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AddAccountComponent,
                LoginComponent,
                ProfileComponent,
                HomeComponent,
                DocumentMenuAdminComponent,
                UsersComponent,
                AdminDocumentsComponent,
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
                {provide: MessageService},
                {provide: Router, useValue: router}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have roles array with specific values', () => {
        expect(component.roles).toEqual(['admin', 'skarga', 'podanie']);
    });

    it('should have loading attribute set to false', () => {
        expect(component.loading).toEqual(false);
    });

    it('should have enableValidators attribute set to false', () => {
        expect(component.enableValidators).toEqual(false);
    });

    it('should toggle enableValidators attribute after onSubmit() method', () => {
        component.onSubmit();
        expect(component.enableValidators).toEqual(true);
    });


});
