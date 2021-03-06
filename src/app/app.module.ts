import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddBookingFormComponent } from './add-booking-form/add-booking-form.component';
import { FindGuestComponent } from './find-guest/find-guest.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FacilityFormComponent } from './facility-form/facility-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/service/auth.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CalendarComponent,
    AddBookingFormComponent,
    FindGuestComponent,
    NotFoundComponent,
    FacilitiesComponent,
    BookingDetailsComponent,
    FacilityFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'calendar',
          component: CalendarComponent,
          children: [
            {
              path: 'facility/:id',
              component: CalendarComponent,
            },
          ],
        },
        {
          path: 'create_facility',
          component: FacilityFormComponent,
        },
        {
          path: 'add_booking',
          component: AddBookingFormComponent,
        },
        {
          path: 'find_guest',
          component: FindGuestComponent,
        },
        {
          path: 'bookings/:id',
          component: BookingDetailsComponent,
        },
        {
          path: '**',
          component: NotFoundComponent,
        },
      ],
      {
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
