import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityFormDialogComponent } from './facility-form-dialog.component';

describe('FacilityFormDialogComponent', () => {
  let component: FacilityFormDialogComponent;
  let fixture: ComponentFixture<FacilityFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
