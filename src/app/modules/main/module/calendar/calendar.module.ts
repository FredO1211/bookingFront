import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarPageComponent } from './page/calendar-page/calendar-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { CalendarModePickerComponent } from './components/calendar-mode-picker/calendar-mode-picker.component';
import { LegendComponent } from './components/legend/legend.component';

@NgModule({
  declarations: [CalendarPageComponent, CalendarViewComponent, CalendarModePickerComponent, LegendComponent],
  imports: [CommonModule, MatTabsModule, MatGridListModule],
})
export class CalendarModule {}
