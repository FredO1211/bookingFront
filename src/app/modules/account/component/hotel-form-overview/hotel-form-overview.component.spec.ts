import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFormOverviewComponent } from './hotel-form-overview.component';

describe('HotelFormOverviewComponent', () => {
  let component: HotelFormOverviewComponent;
  let fixture: ComponentFixture<HotelFormOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelFormOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelFormOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
