import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { valueIsAlreadyExistsValidator } from 'src/app/modules/shared/validators/value-is-already-exists.validator';
import { RentedAreaOverviewDialogComponent } from '../../dialog/rented-area-overview-dialog/rented-area-overview-dialog.component';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import { FacilityType } from '../../dto/facility-type.enum';
import { Facility, RentedArea } from '../../model/facility-configuration.model';
import { ButtonsDisabilityManageService } from '../../service/buttons-disability-manage.service';
import { ConfigGeneratorService } from '../../service/config-generator.service';
import { FacilitiesConfigurationDataService } from '../../service/facilities-configuration-data.service';
import { FormGroupGenerator } from '../../service/form-group-generator';

@Component({
  selector: 'multi-rented-form',
  templateUrl: './multi-rented-form.component.html',
  styleUrls: ['./multi-rented-form.component.scss'],
})
export class HotelFormOverviewComponent implements OnInit {
  @Input() _facility: Facility;
  @Output() closeEmmiter = new EventEmitter();

  facilityButtonConfig: ButtonConfig[];

  configureButtonDisability = new BehaviorSubject(false);

  facilityFormConfig: FacilityFormConfig;
  formGroup: FormGroup;
  facilityFormGroup: FormGroup;
  formStatus: string;

  constructor(
    public disabilityFollowingService: ButtonsDisabilityManageService,
    private configGeneratorService: ConfigGeneratorService,
    private dataService: FacilitiesConfigurationDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this._facility == null) {
      this._facility = {
        facilityName: '',
        facilityType: FacilityType.MULTI_RENTED_FACILITY,
        rentedAreas: [],
      };
    }

    this.facilityFormConfig =
      this.configGeneratorService.getFacilityFormConfigForHotel();

    this.formGroup = FormGroupGenerator.getFormGroupForHotelForm(
      this.getListOfNames(),
      this._facility
    );

    this.facilityFormGroup = this.formGroup.get('facility') as FormGroup;

    this.disabilityFollowingService.initAddNewHotelFacilityButtonDisabilityFollowing(
      this.formGroup
    );

    this.facilityButtonConfig = [
      new ButtonConfig(
        'success',
        '+ Dodaj',
        () => {
          this.insertNewFacility(this.facilityFormGroup.value);
        },
        this.disabilityFollowingService.getAddNewHotelFacilityButtonDisability$()
      ),
    ];
  }

  getFacilityNamesAsString(): string {
    return this._facility.rentedAreas.map((f) => f.name).join(', ');
  }

  dialogButtonConfig: ButtonConfig[] = [
    new ButtonConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonConfig(
      'success',
      'Zapisz',
      () => this.save(),
      this.configureButtonDisability
    ),
  ];

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

  insertNewFacility(facility: RentedArea | any) {
    this._facility.rentedAreas.push(facility);
    this.facilityFormGroup.get('name')?.reset();
    this.facilityFormGroup
      .get('name')
      ?.setValidators([
        Validators.required,
        valueIsAlreadyExistsValidator(this.getListOfNames()),
      ]);
  }

  openRentedAreaDialogComponent() {
    const dialogRef = this.dialog.open(RentedAreaOverviewDialogComponent, {
      data: this._facility.rentedAreas,
      width: '950px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  save() {
    this.dataService.insert(this.formGroup.value);
  }

  closeDialog() {
    this.closeEmmiter.emit();
  }

  private getListOfNames(): string[] {
    return this._facility.rentedAreas.map((f) => f.name);
  }
}
