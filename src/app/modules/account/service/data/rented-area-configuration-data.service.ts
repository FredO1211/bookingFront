import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RentedArea } from '../../model/facility-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class RentedAreaConfigurationDataService {
  private data: RentedArea[] = [];
  private dataMatTable = new MatTableDataSource(this.data);

  init(data: RentedArea[]) {
    this.data = data;
    this.dataMatTable = new MatTableDataSource(this.data);
  }

  insert(toInsert: RentedArea) {
    this.data.push(toInsert);
    this.dataMatTable.data = this.data;
  }

  getDataMatTableData(): MatTableDataSource<RentedArea> {
    return this.dataMatTable;
  }
  setPaginator(paginator: MatPaginator) {
    this.dataMatTable.paginator = paginator;
  }

  removeByIndex(index: number) {
    this.data.splice(index, 1);
    this.dataMatTable.data = this.data;
  }
}
