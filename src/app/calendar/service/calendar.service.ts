import { Injectable } from '@angular/core';

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

  constructor() {}

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
    return array;
  }
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
  public isCurrent() {
    return this.currentMonth;
  }
}
