import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAccommodationFacilityDetailsFormComponent } from './multi-accommodation-facility-details-form.component';

describe('MultiAccommodationFacilityDetailsFormComponent', () => {
  let component: MultiAccommodationFacilityDetailsFormComponent;
  let fixture: ComponentFixture<MultiAccommodationFacilityDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAccommodationFacilityDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAccommodationFacilityDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
