import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogComponent } from './edit-dialog.component';
import {AddAccountComponent} from '../../add-account/add-account.component';
import {LoginComponent} from '../../../account/login/login.component';
import {ProfileComponent} from '../../../account/profile/profile.component';
import {HomeComponent} from '../../../home/home.component';
import {DocumentMenuAdminComponent} from '../../document-menu/document-menu.component';
import {UsersComponent} from '../users.component';
import {AdminDocumentsComponent} from '../../admin-documents/admin-documents.component';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from '../../admin-routing.module';
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
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptor} from '../../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../../helpers/error.interceptor';

describe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

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
    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
