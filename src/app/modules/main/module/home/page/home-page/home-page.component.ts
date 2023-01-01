import { Component, OnInit } from '@angular/core';
import { HomeContextHolderService } from '../../services/home-context-holder.service';
import { WeekOverviewDataGeneratorService } from '../../services/week-overview-data-generator.service';
import { DayOverview } from '../../dto/day-overview.dto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  selectedDate: Date | null;
  weekOverviewData: DayOverview[] | null;

  constructor(
    private contextHolder: HomeContextHolderService,
    private overviewDataGenerator: WeekOverviewDataGeneratorService
  ) {}

  ngOnInit(): void {
    this.contextHolder.setSelectedDate(new Date());
    this.contextHolder.getSelectedDate$().subscribe((result) => {
      this.selectedDate = result;
      if (this.selectedDate != null) {
        this.weekOverviewData = this.overviewDataGenerator.generate(
          this.selectedDate
        );
      }
    });
  }
  onDateChange(date: any) {
    this.contextHolder.setSelectedDate(date);
  }
}
