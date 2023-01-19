import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import { FacilityType } from '../../dto/facility-type.enum';
import { Facility } from '../../model/facility-configuration.model';
import { ConfigGeneratorService } from '../../service/config-generator.service';
import { FacilitiesConfigurationDataService } from '../../service/facilities-configuration-data.service';
import { FormGroupGenerator } from '../../service/form-group-generator';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './fully-rented-facility-form-dialog.component.html',
  styleUrls: ['./fully-rented-facility-form-dialog.component.scss'],
})
export class FullyRentedFacilityFormDialogComponent implements OnInit {
  facilityFormConfig: FacilityFormConfig;
  facilityFormGroup: FormGroup;

  facility: Facility;

  buttonGroupConfig: ButtonConfig[] = [
    new ButtonConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonConfig('success', '+ Dodaj', () => this.save()),
  ];

  constructor(
    private configGeneratorService: ConfigGeneratorService,
    private ownReferences: MatDialogRef<FullyRentedFacilityFormDialogComponent>,
    private confirmLostDataDialog: MatDialog,
    private dataService: FacilitiesConfigurationDataService
  ) {}

  ngOnInit(): void {
    this.facilityFormConfig =
      this.configGeneratorService.getDefaultFacilityFormConfig();

    if (this.facility == null) {
      this.facility = {
        facilityName: '',
        facilityType: FacilityType.MULTI_RENTED_FACILITY,
        rentedAreas: [],
      };
    }

    this.facilityFormGroup =
      FormGroupGenerator.getFormGroupForFullyRentedFacility(
        this.getListOfRoomNames()
      );
  }

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
    this.close(this.facilityFormGroup.value);
  }

  close(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }

  private getListOfRoomNames(): string[] {
    return this.facility.rentedAreas.map((f) => f.name);
  }
}
