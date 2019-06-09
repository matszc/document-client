import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ForNotLoggedInComponent} from './for-not-logged-in.component';
import {AppModule} from '../../../app.module';
import {HomeModule} from '../home.module';
import {Router} from '@angular/router';

describe('ForNotLoggedInComponent', () => {
    let component: ForNotLoggedInComponent;
    let fixture: ComponentFixture<ForNotLoggedInComponent>;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [AppModule, HomeModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ForNotLoggedInComponent);
        component = fixture.componentInstance;
        router = TestBed.get(Router);
        spyOn(router, 'navigateByUrl');
        fixture.detectChanges();
        component.ngOnInit();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it ('should redirect if given email is valid', async (() => {
      component.sendForm.controls['email'].setValue('matiz305@hotmail.com');
      expect(component.sendForm.valid).toBeTruthy();
      component.onSubmitEmail();
      expect(router.navigateByUrl).toHaveBeenCalled();
  }));
    it ('Token shouldnt be send if email is invalid', () => {
        component.tokenForm.controls['token'].setValue('mailWithoutAt');
        expect(component.tokenForm.valid).toBeFalsy();
        expect(component.display).toBeFalsy();
    });
    it ('Should send token if given email is valid', async (() => {
      spyOn(component, 'display');
      component.tokenForm.controls['token'].setValue('matiz305@hotmail.com');
      component.onSubmitToken();
      fixture.detectChanges();
      fixture.whenStable().then( () => {
        fixture.detectChanges();
        expect(component.display).toBeTruthy();
      });
    }));
});
