import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarPageComponent } from './page/calendar-page/calendar-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [CalendarPageComponent, CalendarViewComponent],
  imports: [CommonModule, MatTabsModule, MatGridListModule],
})
export class CalendarModule {}
