import { Injectable } from '@angular/core';
import { DisplayedDay } from '../../../models/day-booking-status';
import { DateTools } from 'src/app/modules/shared/tools/date-tools';

@Injectable({
  providedIn: 'root',
})
export class CalendarDaysArrayGeneratorService {
  constructor() {}

  generate(initalDate: Date, offset: number): DisplayedDay[] {
    let sourceDay = initalDate;
    const resultArray: DisplayedDay[] = [];

    for (let i = 0; i < offset; i++) {
      resultArray.push({
        day: sourceDay.getDate(),
        dayOfWeek: DateTools.convertDayIntoDayName(sourceDay.getDay()),
        month: DateTools.convertMonthIntoMonthName(sourceDay.getMonth()),
        year: sourceDay.getFullYear(),
        displayDark: sourceDay.getMonth() % 2 == 1,
      });
      sourceDay = DateTools.plusDays(sourceDay, 1);
    }
    return resultArray;
  }
}
