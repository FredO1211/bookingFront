import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FacilityType } from '../dto/facility-type.enum';
import { Facility } from '../model/facility-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesConfigurationDataService {
  private data: Facility[] = [];
  private dataToDisplay: FacilityOverviewTableDTO[] = [];
  private dataToDisplayTable = new MatTableDataSource(this.dataToDisplay);

  insert(toInsert: Facility) {
    this.data.push(toInsert);
    this.refreshOverviewDataList();
  }

  getDataMatTableData(): MatTableDataSource<FacilityOverviewTableDTO> {
    return this.dataToDisplayTable;
  }
  getData(): Facility[] {
    return this.data;
  }
  setPaginator(paginator: MatPaginator) {
    this.dataToDisplayTable.paginator = paginator;
  }

  removeByIndex(index: number) {
    this.data.splice(index, 1);
    this.refreshOverviewDataList();
  }

  private refreshOverviewDataList() {
    this.dataToDisplay = this.data.map((d) => {
      if (d.facilityType === FacilityType.MULTI_RENTED_FACILITY) {
        return {
          name: d.facilityName,
          type: FacilityType.MULTI_RENTED_FACILITY,
        };
      } else {
        return {
          name: d.rentedAreas[0].name,
          type: FacilityType.SINGLE_RENTED_FACILITY,
        };
      }
    });
    this.dataToDisplayTable.data = this.dataToDisplay;
  }
}

export interface FacilityOverviewTableDTO {
  name: string;
  type: FacilityType;
}
