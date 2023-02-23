import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { DefaultPaginatorConfig } from 'src/app/modules/shared/service/config/default-paginator-configurtator.service';
import { ConfirmDialogManager } from 'src/app/modules/shared/service/lost-data-confirm-dialog-manager.service';
import { RentedArea } from '../../model/facility-configuration.model';
import { RentedAreaConfigurationDataService } from '../../service/data/rented-area-configuration-data.service';

@Component({
  selector: 'rented-area-overview',
  templateUrl: './rented-area-overview.component.html',
  styleUrls: ['./rented-area-overview.component.scss'],
})
export class RentedAreaOverviewComponent implements OnInit, AfterViewInit {
  @Input('data') _data: FormArray;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  DISPLAYED_COLUMNS: string[] = [
    'type',
    'name',
    'deafultPrice',
    'maxGuestCount',
    'arrivalHour',
    'departureHour',
    'operations',
  ];

  constructor(
    public dataService: RentedAreaConfigurationDataService,
    private confirmDialogManager: ConfirmDialogManager
  ) {}

  ngAfterViewInit(): void {
    DefaultPaginatorConfig.init(this.paginator);
    this.dataService.setPaginator(this.paginator);
  }

  ngOnInit(): void {
    const rentedAreas = this._data.value;
    const rentedAreasToDisplay: RentedArea[] = rentedAreas.slice(
      0,
      rentedAreas.length - 1
    );
    this.dataService.init(rentedAreasToDisplay);
  }

  remove(index: number) {
    this.confirmDialogManager.open({
      header: 'Czy usunąć obiekt?',
      content:
        'Usunięcie spowoduje nieodrwacalną utratę konfiguracji pokoju. Czy kontynuować?',
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
            this._data.removeAt(index);
            this.dataService.removeByIndex(index);
            this.confirmDialogManager.close();
          },
        },
      ],
    });
  }
}
