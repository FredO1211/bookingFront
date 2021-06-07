import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  constructor(private http: HttpClient, public serviceResponse:BlacklistData) { 
  }

  ngOnInit(): void {
    this.http.get<BlacklistData>("http://localhost:8080/bookings/1")
      .subscribe(response=>{
        this.serviceResponse=response;
    })
  }

}
class Guest{
  constructor(
    public id:number, 
    public name:string, 
    public email:string, 
    public phoneNumber: string, 
    public additionalInformation:string){}
}
class Facility{
  constructor(
    public id:number, 
    public name:string,
    public basicRentAmount:number){}
}
class BlacklistData{
  constructor(
    public id:number, 
    public guest:Guest,
    public startOfBooking:string,
    public endOfBooking:string,
    public description:string,
    public countOfGuests:number){
  }
}
