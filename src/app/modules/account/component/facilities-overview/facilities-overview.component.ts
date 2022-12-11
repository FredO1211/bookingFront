import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogManager } from 'src/app/modules/shared/service/lost-data-confirm-dialog-manager.service';
import { ChooseFacilityFormTypeDialogComponent } from '../../dialog/choose-facility-form-type-dialog/choose-facility-form-type-dialog.component';
import { FacilityFormDialogComponent } from '../../dialog/facility-form-dialog/facility-form-dialog.component';
import { HotelFormDialogComponent } from '../../dialog/hotel-form-dialog/hotel-form-dialog.component';
import { FacilitiesConfigurationDataService } from '../../service/facilities-configuration-data.service';

@Component({
  selector: 'facilities-overview',
  templateUrl: './facilities-overview.component.html',
  styleUrls: ['./facilities-overview.component.scss'],
})
export class FacilityConfigFormComponent implements OnInit {
  @Output() addNewFacilityClick = new EventEmitter();

  displayedColumns: string[] = ['type', 'facilityName', 'operations'];
  buttonConfigGroup: ButtonConfig[] = [
    new ButtonConfig('palette.success.light', '+ Dodaj obiekt', () =>
      this.onNewFacilityClick()
    ),
  ];

  constructor(
    public dialog: MatDialog,
    public dataService: FacilitiesConfigurationDataService,
    private confirmDialogManager: ConfirmDialogManager
  ) {}

  ngOnInit(): void {}

  onNewFacilityClick() {
    this.openChooseFacilityTypeDialog();
  }

  openChooseFacilityTypeDialog() {
    const dialogRef = this.dialog.open(ChooseFacilityFormTypeDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result === 'PART_RENT_FACILITY') {
          this.openAddHotelFormDialog();
        } else if (result === 'WHOLE_RENT_FACILITY') {
          this.openAddFacilityFormDialog();
        }
      }
    });
  }

  openAddFacilityFormDialog() {
    const dialogRef = this.dialog.open(FacilityFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  openAddHotelFormDialog() {
    const dialogRef = this.dialog.open(HotelFormDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  remove(index: number) {
    this.confirmDialogManager.open({
      header: 'Czy usunąć obiekt?',
      content:
        'Usunięcie spowoduje nieodrwacalną utratę konfiguracji obiektu. Czy kontynuować?',
      confirmButtonConfig: [
        {
          color: 'accent',
          label: 'Anuluj',
          callback: () => {
            this.confirmDialogManager.close();
          },
        },
        {
          color: 'warn',
          label: 'Usuń',
          callback: () => {
            this.dataService.removeByIndex(index);
            this.confirmDialogManager.close();
          },
        },
      ],
    });
  }
}
