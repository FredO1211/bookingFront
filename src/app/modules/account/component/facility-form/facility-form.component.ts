import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';

@Component({
  selector: 'facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.scss'],
})
export class FacilityFormComponent implements OnInit {
  @Input('formConfig') formConfig: FacilityFormConfig;

  formGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
