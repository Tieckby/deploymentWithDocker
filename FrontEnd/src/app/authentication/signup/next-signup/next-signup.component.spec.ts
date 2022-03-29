import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSignupComponent } from './next-signup.component';

describe('NextSignupComponent', () => {
  let component: NextSignupComponent;
  let fixture: ComponentFixture<NextSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
