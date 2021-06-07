import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  public term = '';
  public objectName = '';
  public bookingLength = '';
  public guestCount = '';
  public description = '';

  public guestName = '';
  public phoneNumber = '';
  public email = '';
  public additionalInformation = '';

  public toPay = '';
  public costPerNight = '';
  public advancedSize = '';
  public paymentCode = '';

  constructor(private http: HttpClient) {
    http
      .get<BlacklistData>('http://localhost:8080/bookings/1')
      .subscribe((response) => {
        this.term = `${response.startOfBooking.replaceAll(
          '-',
          '.'
        )}-${response.endOfBooking.replaceAll('-', '.')}`;
        this.objectName = response.facility.name;

        const stayLength = this.getDaysBetween(
          response.startOfBooking,
          response.endOfBooking
        );

        this.bookingLength = stayLength.toString();
        this.guestCount = response.countOfGuests.toString();
        this.description = response.description;

        this.guestName = response.guest.name;
        this.phoneNumber = response.guest.phoneNumber;
        this.email = response.guest.email;
        this.additionalInformation = response.guest.additionalInformation;

        this.toPay = (
          stayLength * response.payment.costPerNight -
          response.payment.advanceSize -
          response.payment.discount
        ).toString();
        this.costPerNight = response.payment.costPerNight.toString();
        this.advancedSize = response.payment.advanceSize.toString();
        this.paymentCode = response.payment.code;
      });
  }
  private resetTime(dateToReset: Date): Date {
    dateToReset.setHours(0);
    dateToReset.setMinutes(0);
    dateToReset.setSeconds(0);
    dateToReset.setMilliseconds(0);
    return dateToReset;
  }

  private parseDate(stringDate: string) {
    return new Date(stringDate);
  }

  getDaysBetween(startDate: string, endDate: string): number {
    const oneDay = 1000 * 60 * 60 * 24;
    return (
      (this.resetTime(this.parseDate(endDate)).getTime() -
        this.resetTime(this.parseDate(startDate)).getTime()) /
      oneDay
    );
  }

  ngOnInit(): void {}
}
class Payment {
  constructor(
    public id: number,
    public code: string,
    public costPerNight: number,
    public discount: number,
    public advanceSize: number,
    public deadlineForPayment: string,
    public advancePaid: boolean
  ) {}
}
class Guest {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phoneNumber: string,
    public additionalInformation: string
  ) {}
}
class Facility {
  constructor(
    public id: number,
    public name: string,
    public basicRentAmount: number
  ) {}
}
class BlacklistData {
  constructor(
    public id: number,
    public guest: Guest,
    public startOfBooking: string,
    public endOfBooking: string,
    public description: string,
    public countOfGuests: number,
    public facility: Facility,
    public payment: Payment
  ) {}
}
