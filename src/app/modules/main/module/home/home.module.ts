import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { WeekOverviewComponent } from './components/week-overview/week-overview.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomePageComponent, WeekOverviewComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
})
export class HomeModule {}
