import { Component, OnInit } from '@angular/core';
import { DisplayedDay } from '../../models/day-booking-status';
import { DateTools } from 'src/app/modules/shared/tools/date-tools';

@Component({
  selector: 'calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
  displayedDays: DisplayedDay[];
  initalDay: Date;
  constructor() {}

  ngOnInit(): void {
    this.initArray(new Date());
  }

  initArray(startDay: Date) {
    const daysSinceLastMonday =
      startDay.getDay() == 0 ? 6 : startDay.getDay() - 1;

    this.initalDay = DateTools.minusDays(startDay, daysSinceLastMonday);
  }
}
