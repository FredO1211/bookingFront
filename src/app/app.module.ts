import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddBookingFormComponent } from './add-booking-form/add-booking-form.component';
import { FindGuestComponent } from './find-guest/find-guest.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CalendarComponent,
    AddBookingFormComponent,
    FindGuestComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path: 'calendar',
        component: CalendarComponent
      },
      { 
        path: 'add_booking',
        component: AddBookingFormComponent
      },
      { 
        path: 'find_guest',
        component: FindGuestComponent
      },
      { 
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
