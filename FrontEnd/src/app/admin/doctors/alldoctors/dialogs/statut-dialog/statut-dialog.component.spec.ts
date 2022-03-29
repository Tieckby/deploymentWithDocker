import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutDialogComponent } from './statut-dialog.component';

describe('StatutDialogComponent', () => {
  let component: StatutDialogComponent;
  let fixture: ComponentFixture<StatutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
