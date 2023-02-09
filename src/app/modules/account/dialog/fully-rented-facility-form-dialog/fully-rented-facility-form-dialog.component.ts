import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import { FacilityType } from '../../dto/facility-type.enum';
import { Facility } from '../../model/facility-configuration.model';
import { ButtonsDisabilityManageService } from '../../service/buttons-disability-manage.service';
import { ConfigGeneratorService } from '../../service/config-generator.service';
import { FacilitiesConfigurationDataService } from '../../service/facilities-configuration-data.service';
import { FormGroupGenerator } from '../../service/form-group-generator';

@Component({
  selector: 'app-facility-form-dialog',
  templateUrl: './fully-rented-facility-form-dialog.component.html',
  styleUrls: ['./fully-rented-facility-form-dialog.component.scss'],
})
export class FullyRentedFacilityFormDialogComponent
  implements OnInit, OnDestroy
{
  facilityFormConfig: FacilityFormConfig;
  facilityFormGroup: FormGroup;

  facility: Facility;

  private saveDisabilityFollowingService = new ButtonsDisabilityManageService();

  buttonGroupConfig: ButtonConfig[] = [];

  constructor(
    private configGeneratorService: ConfigGeneratorService,
    private ownReferences: MatDialogRef<FullyRentedFacilityFormDialogComponent>,
    private confirmLostDataDialog: MatDialog,
    private dataService: FacilitiesConfigurationDataService,
    @Inject(MAT_DIALOG_DATA) private data: Facility
  ) {}

  ngOnInit(): void {
    this.facilityFormConfig =
      this.configGeneratorService.getDefaultFacilityFormConfig();

    if (this.data == null) {
      this.facility = {
        facilityName: '',
        facilityType: FacilityType.SINGLE_RENTED_FACILITY,
        rentedAreas: [],
      };
    } else {
      this.facility = {
        facilityName: this.data.facilityName,
        facilityType: FacilityType.SINGLE_RENTED_FACILITY,
        rentedAreas: this.data.rentedAreas,
      };
    }

    this.facilityFormGroup =
      FormGroupGenerator.getFormGroupForFullyRentedFacility(
        this.getListOfFacilities(
          this.facility.rentedAreas[0] ? this.facility.rentedAreas[0].name : ''
        ),
        this.facility
      );

    this.saveDisabilityFollowingService.initNewHook(this.facilityFormGroup);

    this.buttonGroupConfig = [
      new ButtonConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
      new ButtonConfig(
        'success',
        '+ Dodaj',
        () => this.save(),
        this.saveDisabilityFollowingService.getButtonDisability$()
      ),
    ];
  }

  save() {
    this.facility.rentedAreas.push(this.facilityFormGroup.value);
    this.dataService.insert(this.facility);
    this.close(this.facilityFormGroup.value);
  }

  close(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }

  private getListOfFacilities(except?: string): string[] {
    return this.dataService
      .getFacilities()
      .map((f) => {
        if (f.facilityType === FacilityType.SINGLE_RENTED_FACILITY) {
          return f.rentedAreas[0].name;
        } else {
          return f.facilityName;
        }
      })
      .filter((s) => s != except);
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

  ngOnDestroy(): void {
    this.saveDisabilityFollowingService.unfollow();
  }
}
