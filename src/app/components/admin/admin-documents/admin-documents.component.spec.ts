import {async, ComponentFixture, TestBed, tick,} from '@angular/core/testing';

import { AdminDocumentsComponent } from './admin-documents.component';
import {AddAccountComponent} from '../add-account/add-account.component';
import {LoginComponent} from '../../account/login/login.component';
import {ProfileComponent} from '../../account/profile/profile.component';
import {HomeComponent} from '../../home/home.component';
import {DocumentMenuAdminComponent} from '../document-menu/document-menu.component';
import {UsersComponent} from '../users/users.component';
import {EditDialogComponent} from '../users/edit-dialog/edit-dialog.component';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from '../admin-routing.module';
import {
  AccordionModule,
  ButtonModule,
  CardModule,
  DialogModule, DropdownModule,
  InputTextModule, MessageModule, MessageService, PanelModule,
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
import {Observable} from 'rxjs';
import anything = jasmine.anything;
import {Cases} from '../../../models/case';

describe('AdminDocumentsComponent', () => {
  let component: AdminDocumentsComponent;
  let fixture: ComponentFixture<AdminDocumentsComponent>;
  let spiner;

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
        MessageService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spiner = fixture.elementRef.nativeElement.querySelector('p-progressSpinner');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have progressSpinner at start', () => {
    expect(component.loading).toEqual(true);
    expect(spiner).toBeTruthy();
  });
});
