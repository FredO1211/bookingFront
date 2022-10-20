import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDataFormComponent } from './facility-data-form.component';

describe('FacilityDataFormComponent', () => {
  let component: FacilityDataFormComponent;
  let fixture: ComponentFixture<FacilityDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
