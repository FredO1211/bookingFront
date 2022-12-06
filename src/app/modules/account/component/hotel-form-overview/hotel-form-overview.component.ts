import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { valueIsAlreadyExistsValidator } from 'src/app/modules/shared/validators/value-is-already-exists.validator';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import {
  FacilitiesConfiguration,
  Facility,
} from '../../model/facility-configuration.model';
import { ButtonsDisabilityManageService } from '../../service/buttons-disability-manage.service';
import { ConfigGeneratorService } from '../../service/config-generator.service';
import { FormGroupGenerator } from '../../service/form-group-generator';

@Component({
  selector: 'hotel-form-overview',
  templateUrl: './hotel-form-overview.component.html',
  styleUrls: ['./hotel-form-overview.component.scss'],
})
export class HotelFormOverviewComponent implements OnInit {
  @Input() _facilityConfiguration: FacilitiesConfiguration;
  @Output() closeEmmiter = new EventEmitter();

  facilityButtonConfig: ButtonGroupConfig[];

  configureButtonDisability = new BehaviorSubject(false);
  newFacilityButtonDisability = new BehaviorSubject(true);
  facilityFormConfig: FacilityFormConfig;
  facilityFormGroup: FormGroup;
  formStatus: string;

  constructor(
    public disabilityFollowingService: ButtonsDisabilityManageService,
    private configGeneratorService: ConfigGeneratorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this._facilityConfiguration == null) {
      this._facilityConfiguration = {
        hotelName: '',
        facilities: [],
      };
    }

    this.facilityFormConfig =
      this.configGeneratorService.getFacilityFormConfigForHotel();

    this.facilityFormGroup = FormGroupGenerator.getFormGroupForHotelForm(
      this.getListOfNames()
    );

    this.disabilityFollowingService.initAddNewHotelFacilityButtonDisabilityFollowing(
      this.facilityFormGroup
    );

    this.facilityButtonConfig = [
      new ButtonGroupConfig(
        'success',
        '+ Dodaj',
        () => {
          this.insertNewFacility(this.facilityFormGroup.value);
        },
        this.disabilityFollowingService.getAddNewHotelFacilityButtonDisability$()
      ),
    ];

    this.facilityFormGroup.statusChanges.subscribe((result) => {
      if (result != this.formStatus) {
        if (result == 'INVALID') {
          this.newFacilityButtonDisability.next(true);
        } else if (result == 'VALID') {
          this.newFacilityButtonDisability.next(false);
        }
      }
    });
  }

  getFacilityNamesAsString(): string {
    return this._facilityConfiguration.facilities.map((f) => f.name).join(', ');
  }

  dialogButtonConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('warn', 'Zamknij', () => this.openLoseDataDialog()),
    new ButtonGroupConfig(
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

  insertNewFacility(facility: Facility | any) {
    this._facilityConfiguration.facilities.push(facility);
    this.facilityFormGroup.get('name')?.reset();
    this.facilityFormGroup
      .get('name')
      ?.setValidators([
        Validators.required,
        valueIsAlreadyExistsValidator(this.getListOfNames()),
      ]);
  }

  save() {
    this.closeDialog();
  }

  closeDialog() {
    this.closeEmmiter.emit();
  }

  private getListOfNames(): string[] {
    return this._facilityConfiguration.facilities.map((f) => f.name);
  }
}
