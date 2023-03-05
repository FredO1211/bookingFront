import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
})
export class UserDataFormComponent implements OnInit {
  @Input('data') _data: FormGroup;

  @Output('isValid') isFormValidEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
