import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostDataConfirmDialogComponent } from './lost-data-confirm-dialog.component';

describe('LostDataConfirmDialogComponent', () => {
  let component: LostDataConfirmDialogComponent;
  let fixture: ComponentFixture<LostDataConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostDataConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostDataConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
