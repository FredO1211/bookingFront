import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { BaseFacilityConfigDTO } from '../../models/base-facility-config.dto';
import { FacilityType } from '../../models/facility-type.enum';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './facility-form-dialog.component.html',
  styleUrls: ['./facility-form-dialog.component.scss'],
})
export class FacilityFormDialogComponent implements OnInit {
  configureButtonDisability = new BehaviorSubject(false);

  baseFacilityConfig = this._formBuilder.group({
    name: new FormControl(''),
    type: new FormControl(FacilityType.NONE),
  });

  buttonGroupConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonGroupConfig(
      'accent',
      'Konfiguruj',
      () => this.save(),
      this.configureButtonDisability
    ),
  ];

  constructor(
    public ownReferences: MatDialogRef<FacilityFormDialogComponent>,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  openLoseDataDialog() {}

  save() {
    this.ownReferences.close(this.baseFacilityConfig.value);
  }
}
