import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
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
  formArray: FormArray;
  rentedAreaFormGroup: FormGroup;
  facilityNameControl: FormControl;
  dialogButtonConfig: ButtonConfig[];

  private currentFacilityFormIndex = 0;
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
    this.facilityFormConfig =
      this.configGeneratorService.getFacilityFormConfigForHotel();

    this.formGroup = FormGroupGenerator.getFormGroupForPartlyRentedFacility(
      this.getListOfFacilities(),
      this.data
    );

    this.formArray = this.formGroup.get('rentedAreas') as FormArray;

    this.rentedAreaFormGroup = this.formArray.at(
      this.currentFacilityFormIndex
    ) as FormGroup;

    this.facilityNameControl = this.formGroup.get(
      'facilityName'
    ) as FormControl;

    this.addDisabilityFollowingService.initNewHook(this.rentedAreaFormGroup);
    this.saveDisabilityFollowingService.initNewHook(this.facilityNameControl);

    this.facilityButtonConfig = [
      new ButtonConfig(
        'success',
        '+ Dodaj',
        () => {
          this.insertNewFacility(this.rentedAreaFormGroup.value);
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
    const formValue: Facility = this.formGroup.value;
    formValue.rentedAreas = formValue.rentedAreas.slice(
      0,
      formValue.rentedAreas.length - 1
    );
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
    console.log(this.rentedAreaFormGroup.value);
    return this.formArray.value
      ? this.formArray.value.map((f: RentedArea) => f.name).join(', ')
      : '';
  }

  insertNewFacility(facility: RentedArea | any) {
    const toInsert = this.formGroup.get('rentedAreas') as FormArray;
    FormGroupGenerator.addFacilityFormGroupToFormArray(toInsert);
    this.currentFacilityFormIndex++;
    this.addDisabilityFollowingService.updateHook(
      this.getRentedAreaFormGroup()
    );
  }

  getRentedAreaFormGroup(): FormGroup {
    const formArray = this.formGroup.get('rentedAreas') as FormArray;
    return formArray.at(this.currentFacilityFormIndex) as FormGroup;
  }

  openRentedAreaDialogComponent() {
    const rentedAreas = this.formArray.value;
    const rentedAreasToDisplay: RentedArea[] = rentedAreas.slice(
      0,
      rentedAreas.length - 1
    );
    const dialogRef = this.dialog.open(RentedAreaOverviewDialogComponent, {
      data: rentedAreasToDisplay,
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
