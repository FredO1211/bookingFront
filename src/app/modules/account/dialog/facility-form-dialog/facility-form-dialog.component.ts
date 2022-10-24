import { Component, OnInit } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { FacilityType } from '../../models/facility-type.enum';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './facility-form-dialog.component.html',
  styleUrls: ['./facility-form-dialog.component.scss'],
})
export class FacilityFormDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getButtonGroupConfig(): ButtonGroupConfig[] {
    const configList: ButtonGroupConfig[] = [];
    configList.push(
      new ButtonGroupConfig('warn', 'Anuluj', () => this.openLoseDataDialog())
    );
    configList.push(
      new ButtonGroupConfig('accent', 'Zapisz', () => this.save())
    );
    return configList;
  }

  openLoseDataDialog() {}

  save() {}
}
