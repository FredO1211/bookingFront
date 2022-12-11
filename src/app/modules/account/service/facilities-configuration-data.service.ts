import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Facility } from '../model/facility-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesConfigurationDataService {
  private data: Facility[] = [];
  private dataMatTable = new MatTableDataSource(this.data);

  insert(toInsert: Facility) {
    this.data.push(toInsert);
    this.dataMatTable.data = this.data;
  }

  getDataMatTableData(): MatTableDataSource<Facility> {
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
