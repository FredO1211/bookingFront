import { Component, Input, OnInit } from '@angular/core';
import { DayOverview } from '../../dto/day-overview.dto';

@Component({
  selector: 'week-overview',
  templateUrl: './week-overview.component.html',
  styleUrls: ['./week-overview.component.scss'],
})
export class WeekOverviewComponent implements OnInit {
  @Input('data') _data: DayOverview[] | null;
  constructor() {}

  ngOnInit(): void {}
}
