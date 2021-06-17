import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  monthArray = [
    'STYCZEŃ',
    'LUTY',
    'MARZEC',
    'KWIECIEŃ',
    'MAJ',
    'CZERWIEC',
    'LIPIEC',
    'SIERPIEŃ',
    'WRZESIEŃ',
    'PAŹDZIERNIK',
    'LISTOPAD',
    'GRUDZIEŃ',
  ];

  constructor(private http: HttpClient, private router: Router) {}

  private resetTime(dateToReset: Date): Date {
    dateToReset.setHours(0);
    dateToReset.setMinutes(0);
    dateToReset.setSeconds(0);
    dateToReset.setMilliseconds(0);
    return dateToReset;
  }

  getToday() {
    let result = new Date();
    this.resetTime(result);
    return result;
  }

  getFirstDayOfMounth(date?: Date): Date {
    let result = new Date(date ?? this.getToday());
    result.setDate(1);
    return result;
  }

  getFirstDateOnPage(date?: Date): Date {
    let result = this.getFirstDayOfMounth(date);
    let daysOfPreviousMonth;
    if (result.getDay() != 0) {
      daysOfPreviousMonth = result.getDay() - 1;
    } else {
      daysOfPreviousMonth = 6;
    }

    result.setDate(result.getDate() - daysOfPreviousMonth);
    this.resetTime(result);

    return result;
  }

  getLastDateOnPage() {
    let result = new Date(this.getFirstDateOnPage());
    result.setDate(result.getDate() + 41);

    return result;
  }

  getMonth(date?: Date): string {
    let source = date ?? new Date();
    return this.monthArray[source.getMonth()];
  }

  getYear(date?: Date): string {
    let source = date ?? new Date();
    return source.getFullYear().toString();
  }

  getBookingList(date: Date, facilityId: number, daysArray: Array<Day>) {
    const bookingList = new Array<SimplifiedBookingDTOList>();
    this.http
      .get<BlacklistData>(
        `http://localhost:8080/bookings/marks?date=${this.convertDateIntoMounthAndYear(
          date
        )}&facility_id=${facilityId}`
      )
      .subscribe(
        (response) => {
          this.replaceInCalendar(
            facilityId,
            daysArray,
            response._embedded?.simplifiedBookingDTOList
          );
        },
        (err) => {
          if (err.status === 401) {
            // this.router.navigate(['/login']);
          }
        }
      );
  }

  getDaysArray(facilityId: number, date?: Date): Array<Day> {
    let array: Array<Day> = new Array();
    let actualDate = date ?? this.getToday();
    for (let i = 0; i < 42; i++) {
      let source = new Date(this.getFirstDateOnPage(actualDate));
      source.setDate(source.getDate() + i);
      array.push(
        new Day(
          this.resetTime(source),
          source.getMonth() == actualDate.getMonth()
        )
      );
    }

    this.getBookingList(actualDate, facilityId, array);

    return array;
  }

  private replaceInCalendar(
    facilityId: number,
    daysArray: Array<Day>,
    bookings: SimplifiedBookingDTOList[]
  ) {
    if (bookings != null) {
      bookings.forEach((booking) => {
        let startDay = daysArray.find((day) => {
          return (
            day.getResponseFormatDate().toString() === booking.startingDate
          );
        });
        let endDay = daysArray.find((day) => {
          return day.getResponseFormatDate().toString() === booking.endingDate;
        });
        booking.otherDatesTaken.forEach((bookedDay) => {
          let takenDay = daysArray.find((day) => {
            return day.getResponseFormatDate().toString() === bookedDay;
          });
          takenDay?.setIsBelongsToReservation(true);
          takenDay?.setBookingUrl(
            booking._links.self.href.replace('http://localhost:8080', '')
          );
        });
        startDay?.setIsStartOfBooking(true);
        startDay?.setBookingUrl(
          booking._links.self.href.replace('http://localhost:8080', '')
        );
        endDay?.setIsEndOfBooking(true);
        endDay?.setBookingUrl(
          booking._links.self.href.replace('http://localhost:8080', '')
        );
      });
    }
  }

  private convertDateIntoMounthAndYear(dateToConvert: Date) {
    const actualMonth = dateToConvert.getMonth() + 1;
    const month = actualMonth > 9 ? `${actualMonth}` : `0${actualMonth}`;
    return `${dateToConvert.getFullYear()}-${month}`;
  }
}
class BlacklistData {
  constructor(public _embedded: _Embedded) {}
}
class _Embedded {
  constructor(public simplifiedBookingDTOList: SimplifiedBookingDTOList[]) {}
}
class Self {
  constructor(public href: string) {}
}
class _Link {
  constructor(public self: Self) {}
}
class SimplifiedBookingDTOList {
  constructor(
    public startingDate: string,
    public endingDate: string,
    public otherDatesTaken: Array<string>,
    public _links: _Link
  ) {}
}

export class Day {
  constructor(
    private currentDate: Date,
    private currentMonth: boolean,
    private isStartOfBooking?: boolean,
    private isEndOfBooking?: boolean,
    private isBelongsToReservation?: boolean,
    private bookingUrl?: string
  ) {}

  public getDay() {
    return this.currentDate.getDate();
  }

  public getResponseFormatDate(): string {
    const actualMonth = this.currentDate.getMonth() + 1;
    const month = actualMonth > 9 ? `${actualMonth}` : `0${actualMonth}`;
    const day = this.getDay() > 9 ? `${this.getDay()}` : `0${this.getDay()}`;

    return `${this.currentDate.getFullYear()}-${month}-${day}`;
  }

  public isCurrent() {
    return this.currentMonth;
  }
  public getIsStartOfBooking() {
    return this.isStartOfBooking;
  }
  public getIsEndOfBooking() {
    return this.isEndOfBooking;
  }
  public getIsBelongsToReservation() {
    return this.isBelongsToReservation;
  }
  public getUrl() {
    return this.bookingUrl;
  }

  public setIsStartOfBooking(value: boolean) {
    this.isStartOfBooking = value;
  }

  public setIsEndOfBooking(value: boolean) {
    this.isEndOfBooking = value;
  }

  public setIsBelongsToReservation(value: boolean) {
    this.isBelongsToReservation = value;
  }

  public setBookingUrl(value: string) {
    this.bookingUrl = value;
  }

  public setCurrentMonth(value: boolean) {
    this.currentMonth = value;
  }
}
