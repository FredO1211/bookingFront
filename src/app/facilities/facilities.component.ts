import { HttpClient } from '@angular/common/http';
import {
  Component,
  Injectable,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

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
  @Output()
  emitter: EventEmitter<number> = new EventEmitter<number>();
  constructor(private http: HttpClient, private router: Router) {
    this.http
      .get<Array<Facility>>('http://localhost:8080/facilities')
      .subscribe((response) => {
        this.facilities = response;
        if (this.facilities.length > 0) {
          this.router.navigate(['calendar/facility/' + this.facilities[0].id]);
          this.onFacilityChange(this.facilities[0].id);
        }
      });
  }

  onFacilityChange(id: number) {
    this.emitter.emit(id);
  }

  public console() {}

  ngOnInit(): void {}
}

export class Facility {
  constructor(
    public id: number,
    public name: string,
    public basicRentAmount: number
  ) {}
}
