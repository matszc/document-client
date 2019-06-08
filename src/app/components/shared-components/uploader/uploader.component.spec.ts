import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UploaderComponent} from './uploader.component';
import {SenderComponent} from '../sender/sender.component';
import {UploaderTaskComponent} from './uploader-task/uploader-task.component';
import {CommonModule} from '@angular/common';
import {PanelModule} from 'primeng/panel';
import {
  ButtonModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule,
  MessageModule,
  MessageService,
  MessagesModule,
  ProgressSpinnerModule,
  TieredMenuModule,
  TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {RouterModule} from '@angular/router';
import {DropzoneDirective} from './dropzone.directive';

describe('UploaderComponent', () => {
  let component: UploaderComponent;
  let fixture: ComponentFixture<UploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SenderComponent,
        UploaderComponent,
        UploaderTaskComponent,
          DropzoneDirective
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
        TieredMenuModule,
        InputTextModule,
        DataViewModule,
        TableModule,
        InputTextareaModule,
        ProgressSpinnerModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: MessageService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
