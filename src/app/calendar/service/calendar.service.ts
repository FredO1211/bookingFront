import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  monthArray = ["STYCZEŃ", "LUTY", "MARZEC", "KWIECIEŃ","MAJ","CZERWIEC","LIPIEC","SIERPIEŃ","WRZESIEŃ","PAŹDZIERNIK","LISTOPAD","GRUDZIEŃ"];

  constructor() { }

  private resetTime(dateToReset:Date) {
    dateToReset.setHours(0);
    dateToReset.setMinutes(0);
    dateToReset.setSeconds(0);
    dateToReset.setMilliseconds(0);
  }

  getToday(){
    return new Date();
  }

  getFirstDateOnPage(){
    let result = new Date(this.getToday());
    let daysOfPreviousMonth;

    result.setDate(1);

    if(result.getDay()!=0){
        daysOfPreviousMonth=result.getDay()-1;
    } else {
        daysOfPreviousMonth=6;
    }

    result.setDate(result.getDate()-daysOfPreviousMonth);
    this.resetTime(result);

    return result;
  }

  getLastDateOnPage(){
    let result = new Date(this.getFirstDateOnPage());
    result.setDate(result.getDate()+41)

    return result;
  }
}

export class Day{
  constructor(private isStartOfBooking: boolean, private isEndOfBooking: boolean, private isBelongsToReservation: boolean, private bookingUrl: string, private date:Day){ }
}
