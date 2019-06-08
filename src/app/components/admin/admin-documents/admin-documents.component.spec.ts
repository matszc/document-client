import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdminDocumentsComponent} from './admin-documents.component';
import {AddAccountComponent} from '../add-account/add-account.component';
import {LoginComponent} from '../../account/login/login.component';
import {ProfileComponent} from '../../account/profile/profile.component';
import {UsersComponent} from '../users/users.component';
import {EditDialogComponent} from '../users/edit-dialog/edit-dialog.component';
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

describe('AdminDocumentsComponent', () => {
  let component: AdminDocumentsComponent;
  let fixture: ComponentFixture<AdminDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocumentMenuComponent,
        AdminDocumentsComponent
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it('should have progressSpinner at start', () => {
    expect(component.loading).toEqual(true);
    expect(spiner).toBeTruthy();
  });*/
});
