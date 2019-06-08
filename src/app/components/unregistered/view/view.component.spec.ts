import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PanelModule} from 'primeng/panel';
import {
  ButtonModule,
  CardModule, DialogModule,
  DropdownModule, InputTextareaModule, InputTextModule,
  MessageModule,
  MessageService,
  MessagesModule,
  ProgressSpinnerModule, TieredMenuModule, TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {CommonModule} from '@angular/common';
import {DataViewModule} from 'primeng/dataview';
import {ViewComponent} from './view.component';

describe('ViewHomeComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewComponent
      ],
      imports: [
        CommonModule,
        PanelModule,
        TooltipModule,
        MessagesModule,
        MessageModule,
        DropdownModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        DataViewModule,
        TableModule,
        InputTextareaModule,
        ProgressSpinnerModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CardModule,
        DialogModule,
        TieredMenuModule
      ],
      providers: [
        MessageService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
