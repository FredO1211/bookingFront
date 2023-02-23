import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emptyUserData } from 'src/app/modules/shared/service/empty-object-factory.service';
import { UserData } from './io/user-data.dto';

@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
})
export class UserDataFormComponent implements OnInit {
  model: UserData;

  @Output('isValid') isFormValidEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.model = emptyUserData();
  }
}
