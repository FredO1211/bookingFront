import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { valueIsAlreadyExistsValidator } from 'src/app/modules/shared/validators/value-is-already-exists.validator';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import { FacilityType } from '../../dto/facility-type.enum';
import { Facility, RentedArea } from '../../model/facility-configuration.model';
import { ButtonsDisabilityManageService } from '../../service/buttons-disability-manage.service';
import { ConfigGeneratorService } from '../../service/config-generator.service';
import { FacilitiesConfigurationDataService } from '../../service/facilities-configuration-data.service';
import { FormGroupGenerator } from '../../service/form-group-generator';
import { RentedAreaOverviewDialogComponent } from '../rented-area-overview-dialog/rented-area-overview-dialog.component';

@Component({
  selector: 'app-hotel-form-dialog',
  templateUrl: './partly-rented-facility-form-dialog.component.html',
  styleUrls: ['./partly-rented-facility-form-dialog.component.scss'],
})
export class PartlyRentedFacilityFormDialogComponent implements OnInit {
  facilityButtonConfig: ButtonConfig[];
  facilityFormConfig: FacilityFormConfig;

  facility: Facility;
  formGroup: FormGroup;
  facilityFormGroup: FormGroup;
  facilityNameControl: FormControl;
  dialogButtonConfig: ButtonConfig[];

  private saveDisabilityFollowingService = new ButtonsDisabilityManageService();
  private addDisabilityFollowingService = new ButtonsDisabilityManageService();

  constructor(
    private ownReferences: MatDialogRef<PartlyRentedFacilityFormDialogComponent>,
    private configGeneratorService: ConfigGeneratorService,
    private dataService: FacilitiesConfigurationDataService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: Facility
  ) {}

  ngOnInit(): void {
    if (this.data == null) {
      this.facility = {
        facilityName: '',
        facilityType: FacilityType.MULTI_RENTED_FACILITY,
        rentedAreas: [],
      };
    } else {
      this.facility = {
        facilityName: this.data.facilityName,
        facilityType: FacilityType.MULTI_RENTED_FACILITY,
        rentedAreas: this.data.rentedAreas,
      };
    }

    this.facilityFormConfig =
      this.configGeneratorService.getFacilityFormConfigForHotel();

    this.formGroup = FormGroupGenerator.getFormGroupForHotelForm(
      this.getListOfFacilities(),
      this.getListOfRoomNames(),
      this.facility
    );

    this.facilityFormGroup = this.formGroup.get('facility') as FormGroup;

    this.facilityNameControl = this.formGroup.get(
      'facilityName'
    ) as FormControl;

    this.addDisabilityFollowingService.initNewHook(this.facilityFormGroup);
    this.saveDisabilityFollowingService.initNewHook(this.facilityNameControl);

    this.facilityButtonConfig = [
      new ButtonConfig(
        'success',
        '+ Dodaj',
        () => {
          this.insertNewFacility(this.facilityFormGroup.value);
        },
        this.addDisabilityFollowingService.getButtonDisability$()
      ),
    ];
    this.dialogButtonConfig = [
      new ButtonConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
      new ButtonConfig(
        'success',
        'Zapisz',
        () => this.save(),
        this.saveDisabilityFollowingService.getButtonDisability$()
      ),
    ];
  }

  save() {
    this.dataService.insert(this.formGroup.value);
    this.closeDialog();
  }

  closeDialog(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }

  ngOnDestroy(): void {
    this.addDisabilityFollowingService.unfollow();
    this.saveDisabilityFollowingService.unfollow();
  }

  getFacilityNamesAsString(): string {
    return this.facility.rentedAreas.map((f) => f.name).join(', ');
  }

  insertNewFacility(facility: RentedArea | any) {
    this.facility.rentedAreas.push(facility);
    this.facilityFormGroup.get('name')?.reset();
    this.facilityFormGroup
      .get('name')
      ?.setValidators([
        Validators.required,
        valueIsAlreadyExistsValidator(this.getListOfRoomNames()),
      ]);
  }

  openRentedAreaDialogComponent() {
    const dialogRef = this.dialog.open(RentedAreaOverviewDialogComponent, {
      data: this.facility.rentedAreas,
      width: '950px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  getMessageForNameControl(): string {
    if (this.facilityNameControl?.hasError('required')) {
      return 'Aby zapisać obiekt podaj nazwę!';
    } else if (this.facilityNameControl?.hasError('used')) {
      return 'Podana nazwa została już użyta!';
    }
    return 'Nieprawidłowa wartość';
  }

  private getListOfRoomNames(): string[] {
    return this.facility.rentedAreas.map((f) => f.name);
  }

  private getListOfFacilities(): string[] {
    return this.dataService.getFacilities().map((f) => {
      if (f.facilityType === FacilityType.SINGLE_RENTED_FACILITY) {
        return f.rentedAreas[0].name;
      } else {
        return f.facilityName;
      }
    });
  }

  private openLoseDataDialog() {
    const dialogRef = this.dialog.open(LostDataConfirmDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (result == ConfirmDialogStatus.CONFIRM) {
          this.closeDialog();
        }
      }
    });
  }
}
