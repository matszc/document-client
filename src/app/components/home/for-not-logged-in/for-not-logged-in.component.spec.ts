import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNotLoggedInComponent } from './for-not-logged-in.component';

describe('ForNotLoggedInComponent', () => {
  let component: ForNotLoggedInComponent;
  let fixture: ComponentFixture<ForNotLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForNotLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForNotLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
