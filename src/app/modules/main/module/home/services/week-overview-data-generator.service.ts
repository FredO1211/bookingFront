import { Injectable } from '@angular/core';
import { DayOverview } from '../dto/day-overview.dto';

@Injectable({
  providedIn: 'root',
})
export class WeekOverviewDataGeneratorService {
  private DAY_IN_MS = 86400000;
  constructor() {}

  generate(initialDate: Date): DayOverview[] {
    const result: DayOverview[] = [];
    let currentDate = initialDate;
    for (let i = 0; i < 4; i++) {
      const dayOverview = {
        date: currentDate,
        arivalCount: 4,
        departureCount: 3,
      };
      result.push(dayOverview);
      currentDate = new Date(currentDate.getTime() + this.DAY_IN_MS);
    }
    return result;
  }
}
