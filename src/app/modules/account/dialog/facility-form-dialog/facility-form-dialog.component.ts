import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
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
    type: new FormControl(),
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
    private _formBuilder: FormBuilder,
    public confirmLostDataDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openLoseDataDialog() {
    const dialogRef = this.confirmLostDataDialog.open(
      LostDataConfirmDialogComponent,
      {
        width: '400px',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (result == ConfirmDialogStatus.CONFIRM) {
          this.ownReferences.close();
        }
      }
    });
  }

  save() {
    this.ownReferences.close(this.baseFacilityConfig.value);
  }
}
