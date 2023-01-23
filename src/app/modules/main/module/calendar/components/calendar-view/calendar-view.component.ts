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

  private selectedInedexRange: [number, number] = [-1, -1];
  private isClicked: boolean = false;
  private isThrottled: boolean = false;

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

  startListening(i: number) {
    this.selectedInedexRange = [i, i];
    this.isClicked = true;
  }

  stopListening() {
    this.isClicked = false;
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

  rewind(event: any) {
    if (!this.isThrottled) {
      this.isThrottled = true;
      if (event.wheelDeltaY < 0) this.scrollDown();
      else if (event.wheelDeltaY > 0) this.scrollUp();
      setTimeout(() => {
        this.isThrottled = false;
      }, 1000);
    }
  }

  private scrollUp() {
    const initialDate = DateTools.minusDays(this.displayedDays[0].date, 7);
    const newDaysBefore = this.daysArrayGenerator.generate(initialDate, 7);
    this.displayedDays = newDaysBefore.concat(
      this.displayedDays.slice(0, this.displayedDays.length - 7)
    );
  }
  private scrollDown() {
    debugger;
    const initialDate = DateTools.plusDays(
      this.displayedDays[this.displayedDays.length - 1].date,
      1
    );
    const newDaysAfter = this.daysArrayGenerator.generate(initialDate, 7);
    this.displayedDays = this.displayedDays.slice(7).concat(newDaysAfter);
  }
}
