import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HomeModule} from './home.module';
import {
    ButtonModule, CardModule, DialogModule,
    DropdownModule, InputTextareaModule, InputTextModule,
    MessageModule, MessageService,
    MessagesModule,
    PanelModule,
    ProgressSpinnerModule, TieredMenuModule,
    TooltipModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ForNotLoggedInComponent} from './for-not-logged-in/for-not-logged-in.component';
import {SenderHomeComponent} from './for-not-logged-in/sender/sender.component';
import {UploaderHomeComponent} from './for-not-logged-in/uploader/uploader.component';
import {UploaderTaskHomeComponent} from './for-not-logged-in/uploader/uploader-task/uploader-task.component';
import {TileComponent} from './for-not-logged-in/view/tile/tile.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {DataViewModule} from 'primeng/dataview';
import {WelcomeComponent} from './welcome/welcome.component';
import {ViewHomeComponent} from './for-not-logged-in/view/view.component';
import {SingleDocHomeComponent} from './for-not-logged-in/single-doc/single-doc.component';
import {JwtInterceptor} from '../../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../../helpers/error.interceptor';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ForNotLoggedInComponent,
                SenderHomeComponent,
                UploaderHomeComponent,
                UploaderTaskHomeComponent,
                TileComponent,
                HomeComponent,
                WelcomeComponent,
                ViewHomeComponent,
                SingleDocHomeComponent
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
                HomeRoutingModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
                AngularFireStorageModule,
                CardModule,
                DialogModule,
                TieredMenuModule
            ],
            providers: [
                MessageService,
                {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
            ],
        })
            .compileComponents();
    }));
    // TODO Error: Cannot find module './components/home/home.module'
    /*beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });*/

});
