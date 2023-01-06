import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './module/about/page/about-page/about-page.component';
import { HomePageComponent } from './module/home/page/home-page/home-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { CalendarPageComponent } from './module/calendar/page/calendar-page/calendar-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'about', component: AboutPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'calendar', component: CalendarPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
