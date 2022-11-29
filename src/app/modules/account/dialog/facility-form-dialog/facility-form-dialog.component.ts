import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { FacilityType } from '../../models/facility-type.enum';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './facility-form-dialog.component.html',
  styleUrls: ['./facility-form-dialog.component.scss'],
})
export class FacilityFormDialogComponent implements OnInit {
  baseFacilityConfig = this.formBuilder.group({
    name: new FormControl(''),
    type: new FormControl(),
  });

  facilityFormConfig = {
    facilityTypes: [
      { name: 'Domek wypoczynkowy', type: FacilityType.BUNGALOW },
      { name: 'Pokój', type: FacilityType.ROOM },
      { name: 'Apartament', type: FacilityType.APARTMENT },
    ],
  };

  configureButtonDisability = new BehaviorSubject(false);

  buttonGroupConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonGroupConfig(
      'success',
      '+ Dodaj',
      () => this.save(),
      this.configureButtonDisability
    ),
  ];

  constructor(
    private ownReferences: MatDialogRef<FacilityFormDialogComponent>,
    private formBuilder: FormBuilder,
    private confirmLostDataDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  private openLoseDataDialog() {
    const dialogRef = this.confirmLostDataDialog.open(
      LostDataConfirmDialogComponent,
      {
        width: '400px',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (result == ConfirmDialogStatus.CONFIRM) {
          this.close();
        }
      }
    });
  }

  save() {
    this.close(this.baseFacilityConfig.value);
  }

  close(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }
}
