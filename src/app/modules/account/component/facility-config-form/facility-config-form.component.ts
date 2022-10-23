import { Component, OnInit } from '@angular/core';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';

@Component({
  selector: 'facility-config-form',
  templateUrl: './facility-config-form.component.html',
  styleUrls: ['./facility-config-form.component.scss'],
})
export class FacilityConfigFormComponent implements OnInit {
  facilities: any[] = [];
  displayedColumns: string[] = ['position'];
  buttonConfigGroup: ButtonGroupConfig[] = [
    new ButtonGroupConfig(
      'palette.success.light',
      'Dodaj obiekt',
      'addFacility'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  executeButtonGroup(eventName: string) {}
}
