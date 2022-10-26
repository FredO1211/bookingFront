import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';

@Component({
  selector: 'facility-config-list',
  templateUrl: './facility-config-list.component.html',
  styleUrls: ['./facility-config-list.component.scss'],
})
export class FacilityConfigFormComponent implements OnInit {
  @Output() addNewFacilityClick = new EventEmitter();

  facilities: any[] = [];
  displayedColumns: string[] = ['position'];
  buttonConfigGroup: ButtonGroupConfig[] = [
    new ButtonGroupConfig('palette.success.light', '+ Dodaj obiekt', () =>
      this.onNewFacilityClick()
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onNewFacilityClick() {
    this.addNewFacilityClick.emit();
  }

  openDialog() {}
}
