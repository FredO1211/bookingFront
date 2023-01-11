import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  templateUrl: './partly-rented-facility-form.component.html',
  styleUrls: ['./partly-rented-facility-form.component.scss'],
})
export class HotelFormOverviewComponent implements OnInit, OnDestroy {
  @Input() _facility: Facility;
  @Output() closeEmmiter = new EventEmitter();

  facilityButtonConfig: ButtonConfig[];
  facilityFormConfig: FacilityFormConfig;

  formGroup: FormGroup;
  facilityFormGroup: FormGroup;
  facilityNameControl: FormControl;

  private saveDisabilityFollowingService = new ButtonsDisabilityManageService();
  private addDisabilityFollowingService = new ButtonsDisabilityManageService();

  dialogButtonConfig: ButtonConfig[] = [
    new ButtonConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonConfig(
      'success',
      'Zapisz',
      () => this.save(),
      this.saveDisabilityFollowingService.getButtonDisability$()
    ),
  ];

  constructor(
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
      this.getListOfFacilities(),
      this.getListOfRoomNames(),
      this._facility
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
  }

  ngOnDestroy(): void {
    this.addDisabilityFollowingService.unfollow();
    this.saveDisabilityFollowingService.unfollow();
  }

  getFacilityNamesAsString(): string {
    return this._facility.rentedAreas.map((f) => f.name).join(', ');
  }

  insertNewFacility(facility: RentedArea | any) {
    this._facility.rentedAreas.push(facility);
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
      data: this._facility.rentedAreas,
      width: '950px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  save() {
    this.dataService.insert(this.formGroup.value);
    this.closeDialog();
  }

  getMessageForNameControl(): string {
    if (this.facilityNameControl?.hasError('required')) {
      return 'Aby zapisać obiekt podaj nazwę!';
    } else if (this.facilityNameControl?.hasError('used')) {
      return 'Podana nazwa została już użyta!';
    }
    return 'Nieprawidłowa wartość';
  }

  private closeDialog() {
    this.closeEmmiter.emit();
  }

  private getListOfRoomNames(): string[] {
    return this._facility.rentedAreas.map((f) => f.name);
  }

  private getListOfFacilities(): string[] {
    return this.dataService.getData().map((d) => d.facilityName);
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
