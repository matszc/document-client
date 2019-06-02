import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentMenuComponent} from './document-menu.component';
import {CommonModule} from '@angular/common';
import {MessageService, TieredMenuModule} from 'primeng/primeng';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptor} from '../../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../../helpers/error.interceptor';
import {HomeComponent} from '../../home/home.component';

describe('DocumentMenuComponent', () => {
  let component: DocumentMenuComponent;
  let fixture: ComponentFixture<DocumentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocumentMenuComponent
      ],
      imports: [
        CommonModule,
        TieredMenuModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule
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
    fixture = TestBed.createComponent(DocumentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
