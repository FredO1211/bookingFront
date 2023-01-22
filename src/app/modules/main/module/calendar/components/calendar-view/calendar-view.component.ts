import { Component, OnInit } from '@angular/core';
import { DisplayedDay } from '../../models/day-booking-status';
import { DateTools } from 'src/app/modules/shared/tools/date-tools';
import { CalendarDaysArrayGeneratorService } from './services/calendar-days-array-generator.service';

@Component({
  selector: 'calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
  providers: [CalendarDaysArrayGeneratorService],
})
export class CalendarViewComponent implements OnInit {
  displayedDays: DisplayedDay[];
  selectedInedexRange: [number, number] = [-1, -1];

  private isClicked: boolean = false;

  constructor(private daysArrayGenerator: CalendarDaysArrayGeneratorService) {}

  ngOnInit(): void {
    this.initArray(new Date());
  }

  initArray(startDay: Date) {
    const daysSinceLastMonday =
      startDay.getDay() == 0 ? 6 : startDay.getDay() - 1;

    const initalDay = DateTools.minusDays(startDay, daysSinceLastMonday);

    this.displayedDays = this.daysArrayGenerator.generate(initalDay, 42);
  }

  onMouseEnter(i: number) {
    if (this.isClicked) {
      this.selectedInedexRange[1] = i;
    }
  }

  isInRange(index: number) {
    let min =
      this.selectedInedexRange[1] > this.selectedInedexRange[0]
        ? this.selectedInedexRange[0]
        : this.selectedInedexRange[1];
    let max =
      this.selectedInedexRange[1] > this.selectedInedexRange[0]
        ? this.selectedInedexRange[1]
        : this.selectedInedexRange[0];

    return index >= min && index <= max;
  }

  startListening(i: number) {
    this.selectedInedexRange = [i, i];
    this.isClicked = true;
  }

  stopListening(i: number) {
    this.isClicked = false;
  }
}
