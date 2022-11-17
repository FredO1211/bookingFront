import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFormDialogComponent } from './hotel-form-dialog.component';

describe('HotelFormDialogComponent', () => {
  let component: HotelFormDialogComponent;
  let fixture: ComponentFixture<HotelFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
