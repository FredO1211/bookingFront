import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../calendar/service/calendar.service';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class FacilitiesComponent implements OnInit {
  facilities: Array<Facility> = new Array();
  constructor(
    private http: HttpClient,
    private calendarService: CalendarService
  ) {
    this.http
      .get<Array<Facility>>('http://localhost:8080/facilities')
      .subscribe((response) => {
        this.facilities = response;
      });
  }

  public console() {
  }

  ngOnInit(): void {}
}

export class Facility {
  constructor(
    public id: number,
    public name: string,
    public basicRentAmount: number
  ) {}
}
