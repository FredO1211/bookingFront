import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Facility } from 'app/facilities/facilities.component';

@Component({
  selector: 'app-add-booking-form',
  templateUrl: './add-booking-form.component.html',
  styleUrls: ['./add-booking-form.component.css'],
})
export class AddBookingFormComponent implements OnInit {
  public facilities: Array<Facility> = new Array();
  public formIndex: number = 1;
  public booking: Booking = new Booking();
  constructor(private http: HttpClient) {
    this.http
      .get<Array<Facility>>('http://localhost:8080/facilities')
      .subscribe((response) => {
        this.facilities = response;
      });
  }

  onSubmitClick() {
    this.http.post('http://localhost:8080/bookings', this.booking).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFormIndex() {
    return this.formIndex;
  }

  onNextClick(f: NgForm) {
    switch (this.formIndex) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
    }
    this.formIndex++;
  }

  onPreviousClick() {
    console.clear();
    if (this.formIndex > 1) {
      this.formIndex--;
    }
  }

  ngOnInit(): void {}
}
class Booking {
  constructor(
    public guest: Guest = new Guest(),
    public startOfBooking: string = '',
    public endOfBooking: string = '',
    public description: string = '',
    public countOfGuests: number = 0,
    public payment: Payment = new Payment(),
    public facility: Facility = new Facility(0, '', 0)
  ) {}
}

class Guest {
  public name: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public additionalInformation: string = '';
  constructor() {}
}

class Payment {
  code: string = '';
  costPerNight: number = 0;
  discount: number = 0;
  advanceSize: number = 0;
  deadlineForPayment: string = '';
  advancePaid: boolean = false;
  constructor() {}
}
