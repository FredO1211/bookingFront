import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.css'],
})
export class FacilityFormComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const facitityToSave = new Facility(f.value.name, f.value.basicRentAmount);
    this.http
      .post('http://localhost:8080/facilities', facitityToSave)
      .subscribe(
        (response) => {
          f.resetForm();
        },
        (error) => {
          if (error.status == 400) {
            window.alert(error.error.message);
          }
          if (error.status == 401) {
            this.router.navigate(['/login']);
          }
        }
      );
  }
}
class Facility {
  constructor(public name: string, public basicRentAmount: number) {}
}
