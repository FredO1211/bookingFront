import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { CalendarService, Day } from './service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  month: string = 'STYCZEŃ';
  year: string = '1970';
  days: Array<Day> = new Array(42);
  actualDate: Date = new Date('01-01-1970');

  constructor(
    private service: CalendarService,
    private facility: FacilitiesComponent
  ) {}

  ngOnInit(): void {
    this.year = this.service.getYear();
    this.month = this.service.getMonth();
    this.days = this.service.getDaysArray(1);
    this.actualDate = this.service.getFirstDateOnPage();
    this.facility.console();
  }

  loadNextMonth(): void {
    this.actualDate.setMonth(this.actualDate.getMonth() + 1);
    this.year = this.service.getYear(this.actualDate);
    this.month = this.service.getMonth(this.actualDate);
    this.days = this.service.getDaysArray(1, this.actualDate);
  }

  loadPreviousMonth(): void {
    this.actualDate.setMonth(this.actualDate.getMonth() - 1);
    this.year = this.service.getYear(this.actualDate);
    this.month = this.service.getMonth(this.actualDate);
    this.days = this.service.getDaysArray(1, this.actualDate);
  }

  doSth() {
    console.log(this.service.getLastDateOnPage());
  }
}
