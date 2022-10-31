import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAccommodationFacilityDetailsFormComponent } from './single-accommodation-facility-details-form.component';

describe('SingleAccommodationFacilityDetailsFormComponent', () => {
  let component: SingleAccommodationFacilityDetailsFormComponent;
  let fixture: ComponentFixture<SingleAccommodationFacilityDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAccommodationFacilityDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAccommodationFacilityDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
