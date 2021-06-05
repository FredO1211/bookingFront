import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

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

  getBookingList(date: Date, facilityId: number, daysArray: Array<Day>){
    const bookingList =new Array<SimplifiedBookingDTOList>(); 
    this.http
      .get<BlacklistData>(`http://localhost:8080/bookings/marks?date=${this.convertDateIntoMounthAndYear(date)}&facility_id=${facilityId}`)
      .subscribe((response) => {
        this.replaceInCalendar(facilityId, daysArray, response._embedded?.simplifiedBookingDTOList);
      });
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

    this.getBookingList(actualDate, facilityId , array);

    return array;
  }

  private replaceInCalendar(facilityId:number, daysArray:Array<Day>, bookings : SimplifiedBookingDTOList[]){
    if(bookings!=null){
      bookings.forEach(booking=>{
        daysArray.find(day=>{
          return day.getResponseFormatDate().toString()===booking.startingDate
        })?.setCurrentMonth(false);
      })
    }
  }

  private convertDateIntoMounthAndYear(dateToConvert:Date){
    const actualMonth = dateToConvert.getMonth()+1;
    const month = actualMonth>9?`${actualMonth}`:`0${actualMonth}`
    return `${dateToConvert.getFullYear()}-${month}`
  }

}
export class BlacklistData{
  constructor(public _embedded:_Embedded){
  }
}
export class _Embedded{
  constructor(public simplifiedBookingDTOList : SimplifiedBookingDTOList[]){
  }
}

export class SimplifiedBookingDTOList{
  constructor(
    public startingDate : string,
    public endingDate : string,
    public otherDatesTaken : Array<string>,
    public link:string
  ){}
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

  public getResponseFormatDate() : string{
    const actualMonth = this.currentDate.getMonth()+1;
    const month = (actualMonth>9)?`${actualMonth}`:`0${actualMonth}`
    const day = (this.getDay()>9)?`${this.getDay()}`:`0${this.getDay()}`

    return  `${this.currentDate.getFullYear()}-${month}-${day}`;
  }

  public isCurrent() {
    return this.currentMonth;
  }

  public setIsStartOfBooking(value:boolean){
    this.isStartOfBooking=value;
  }

  public setIsEndOfBooking(value : boolean){
    this.isEndOfBooking=value;
  }

  public setIsBelongsToReservation(value : boolean){
    this.isBelongsToReservation=value;
  }

  public setBookingUrl(value : string){
    this.bookingUrl=value;
  }

  public setCurrentMonth(value : boolean){
    this.currentMonth=value;
  }
}
