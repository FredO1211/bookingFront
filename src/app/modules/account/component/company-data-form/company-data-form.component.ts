import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'company-data-form',
  templateUrl: './company-data-form.component.html',
  styleUrls: ['./company-data-form.component.scss'],
})
export class CompanyDataFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onScrollBottom() {
    console.log('bottom form parent');
  }
}
