import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';

@Component({
  selector: 'facility-form',
  templateUrl: './rented-area-form.component.html',
  styleUrls: ['./rented-area-form.component.scss'],
})
export class FacilityFormComponent implements OnInit {
  @Input('formConfig') formConfig: FacilityFormConfig;
  @Input('formGroup') formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  getMessageForNameControl(): string {
    const formControl = this.formGroup.get('name');
    if (formControl?.hasError('required')) {
      return 'Aby zapisać obiekt podaj nazwę!';
    } else if (formControl?.hasError('used')) {
      return 'Podana nazwa została już użyta!';
    }
    return 'Nieprawidłowa wartość';
  }
}
