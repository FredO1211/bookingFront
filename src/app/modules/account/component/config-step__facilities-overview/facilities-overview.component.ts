import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { DefaultPaginatorConfig } from 'src/app/modules/shared/service/config/default-paginator-configurtator.service';
import { ConfirmDialogManager } from 'src/app/modules/shared/service/lost-data-confirm-dialog-manager.service';
import { FacilityFormTypePickerDialogComponent } from '../../dialog/facility-form-type-picker-dialog/facility-form-type-picker-dialog.component';
import { FullyRentedFacilityFormDialogComponent } from '../../dialog/fully-rented-facility-form-dialog/fully-rented-facility-form-dialog.component';
import { PartlyRentedFacilityFormDialogComponent } from '../../dialog/partly-rented-facility-form-dialog/partly-rented-facility-form-dialog.component';
import { FacilityType } from '../../dto/facility-type.enum';
import { Facility } from '../../model/facility-configuration.model';
import { FacilitiesConfigurationDataService } from '../../service/facilities-configuration-data.service';

@Component({
  selector: 'facilities-overview',
  templateUrl: './facilities-overview.component.html',
  styleUrls: ['./facilities-overview.component.scss'],
})
export class FacilityConfigFormComponent implements OnInit, AfterViewInit {
  @Output() addNewFacilityClick = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['facilityName', 'type', 'operations'];
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

  ngAfterViewInit(): void {
    DefaultPaginatorConfig.init(this.paginator);
    this.dataService.setPaginator(this.paginator);
  }

  ngOnInit(): void {}

  onNewFacilityClick() {
    this.openChooseFacilityTypeDialog();
  }

  openChooseFacilityTypeDialog() {
    const dialogRef = this.dialog.open(FacilityFormTypePickerDialogComponent, {
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

  openAddFacilityFormDialog(data?: Facility) {
    const dialogRef = this.dialog.open(FullyRentedFacilityFormDialogComponent, {
      width: '500px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  openAddHotelFormDialog(data?: Facility) {
    const dialogRef = this.dialog.open(
      PartlyRentedFacilityFormDialogComponent,
      {
        width: '600px',
        data: data,
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  edit(index: number) {
    const data = this.dataService.getFacilityByIndex(index);
    if (data.facilityType === FacilityType.MULTI_RENTED_FACILITY) {
      this.openAddHotelFormDialog(data);
    } else {
      this.openAddFacilityFormDialog(data);
    }
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
