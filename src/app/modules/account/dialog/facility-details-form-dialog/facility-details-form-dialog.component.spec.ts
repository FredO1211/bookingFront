import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDetailsFormDialogComponent } from './facility-details-form-dialog.component';

describe('FacilityDetailsFormDialogComponent', () => {
  let component: FacilityDetailsFormDialogComponent;
  let fixture: ComponentFixture<FacilityDetailsFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityDetailsFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDetailsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
