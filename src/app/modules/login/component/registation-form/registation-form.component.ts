import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.scss'],
})
export class RegistationFormComponent implements OnInit {
  password = '';

  constructor() {}

  ngOnInit(): void {}
}
