import { Component, OnInit } from '@angular/core';
import { CalendarService } from './service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  month : string = "STYCZEŃ";
  year: string ="1970"

  constructor(private service: CalendarService) { }

  ngOnInit(): void {
  }

  doSth(){
    console.log(this.service.getLastDateOnPage());
  }

}
