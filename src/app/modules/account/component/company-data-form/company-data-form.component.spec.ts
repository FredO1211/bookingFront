import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDataFormComponent } from './company-data-form.component';

describe('FacilityDataFormComponent', () => {
  let component: CompanyDataFormComponent;
  let fixture: ComponentFixture<CompanyDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDataFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
