import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { WeekOverviewComponent } from './components/week-overview/week-overview.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { GuestArrivalOverviewComponent } from './components/guest-arrival-overview/guest-arrival-overview.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    HomePageComponent,
    WeekOverviewComponent,
    GuestArrivalOverviewComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [],
})
export class HomeModule {}
