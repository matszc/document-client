import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderTaskComponent } from './uploader-task.component';
import {SendComponent} from '../../send.component';
import {HomeComponent} from '../../../../home/home.component';
import {DocumentMenuComponent} from '../../../document-menu/document-menu.component';
import {SenderComponent} from '../../sender/sender.component';
import {UploaderComponent} from '../uploader.component';
import {SingleDocComponent} from '../../../single-doc/single-doc.component';
import {ViewComponent} from '../../../view/view.component';
import {CommonModule} from '@angular/common';
import {DocumentsRoutingModule} from '../../../documents-routing.module';
import {PanelModule} from 'primeng/panel';
import {
  ButtonModule,
  DropdownModule, InputTextareaModule,
  InputTextModule,
  MessageModule, MessageService,
  MessagesModule, ProgressSpinnerModule,
  TieredMenuModule,
  TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {JwtInterceptor} from '../../../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../../../helpers/error.interceptor';
import {UploadService} from '../../../../../services/upload.service';
import {AuthService} from '../../../../../services/auth.service';
import {Router} from '@angular/router';

describe('UploaderTaskComponent', () => {
  let component: UploaderTaskComponent;
  let fixture: ComponentFixture<UploaderTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SendComponent,
        HomeComponent,
        DocumentMenuComponent,
        SenderComponent,
        UploaderComponent,
        UploaderTaskComponent,
        SingleDocComponent,
        ViewComponent
      ],
      imports: [
        CommonModule,
        DocumentsRoutingModule,
        PanelModule,
        TooltipModule,
        MessagesModule,
        MessageModule,
        DropdownModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TieredMenuModule,
        InputTextModule,
        DataViewModule,
        TableModule,
        InputTextareaModule,
        ProgressSpinnerModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
      ],
      providers: [
        {provide: MessageService}
      ]
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
