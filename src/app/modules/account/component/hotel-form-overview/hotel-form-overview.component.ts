import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-form-overview',
  templateUrl: './hotel-form-overview.component.html',
  styleUrls: ['./hotel-form-overview.component.scss'],
})
export class HotelFormOverviewComponent implements OnInit {
  objects = 'A01, A02, A03';
  constructor() {}

  ngOnInit(): void {}
}
