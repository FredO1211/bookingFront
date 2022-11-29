import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { FacilityType } from '../../models/facility-type.enum';

@Component({
  selector: 'app-hotel-form-dialog',
  templateUrl: './hotel-form-dialog.component.html',
  styleUrls: ['./hotel-form-dialog.component.scss'],
})
export class HotelFormDialogComponent implements OnInit {
  configureButtonDisability = new BehaviorSubject(false);

  constructor(
    private ownReferences: MatDialogRef<HotelFormDialogComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  facilityFormConfig = {
    facilityTypes: [
      { name: 'Pokój', type: FacilityType.ROOM },
      { name: 'Apartament', type: FacilityType.APARTMENT },
    ],
  };

  dialogButtonConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonGroupConfig(
      'success',
      'Zapisz',
      () => this.save(),
      this.configureButtonDisability
    ),
  ];

  facilityButtonConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('success', '+ Dodaj', () =>
      this.openLoseDataDialog()
    ),
  ];

  private openLoseDataDialog() {
    const dialogRef = this.dialog.open(LostDataConfirmDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (result == ConfirmDialogStatus.CONFIRM) {
          this.close();
        }
      }
    });
  }

  save() {
    this.close();
  }

  close(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }
}
