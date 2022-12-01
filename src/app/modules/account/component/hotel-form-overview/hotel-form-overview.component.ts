import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';
import { FacilityFormConfig } from '../../dto/facility-form-config.dto';
import {
  FacilitiesConfiguration,
  Facility,
} from '../../model/facility-configuration.model';
import { ConfigGeneratorService } from '../../service/config-generator.service';

@Component({
  selector: 'hotel-form-overview',
  templateUrl: './hotel-form-overview.component.html',
  styleUrls: ['./hotel-form-overview.component.scss'],
})
export class HotelFormOverviewComponent implements OnInit {
  @Input() _facilityConfiguration: FacilitiesConfiguration;
  @Output() closeEmmiter = new EventEmitter();

  configureButtonDisability = new BehaviorSubject(false);
  facilityFormConfig: FacilityFormConfig;
  facilityFormGroup = new FormGroup({
    name: new FormControl(),
    facilityType: new FormControl(),
    deafultPrice: new FormControl(),
    maxGuestCount: new FormControl(),
    arrivalHour: new FormControl(),
    arrivalDeparture: new FormControl(),
  });

  facilityNamesAsString = '';
  constructor(
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

  facilityButtonConfig: ButtonGroupConfig[] = [
    new ButtonGroupConfig('success', '+ Dodaj', () => {
      console.log(this.facilityFormGroup.value);
      this.insertNewFacility(this.facilityFormGroup.value);
    }),
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

  insertNewFacility(facility: Facility) {
    this._facilityConfiguration.facilities.push(facility);
    if (this.facilityNamesAsString.length > 0) {
      this.facilityNamesAsString += ', ';
    }
    this.facilityNamesAsString += facility.name;
  }

  save() {
    this.closeDialog();
  }

  closeDialog() {
    this.closeEmmiter.emit();
  }
}
