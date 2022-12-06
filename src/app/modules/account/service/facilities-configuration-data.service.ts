import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FacilitiesConfiguration } from '../model/facility-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesConfigurationDataService extends DataSource<FacilitiesConfiguration> {
  private data: FacilitiesConfiguration[] = [];
  private data$ = new BehaviorSubject(this.data);

  connect(): Observable<readonly FacilitiesConfiguration[]> {
    return this.data$.asObservable();
  }
  disconnect(): void {}

  insert(toInsert: FacilitiesConfiguration) {
    this.data.push(toInsert);
    this.data$.next(this.data);
  }

  getData$(): Observable<FacilitiesConfiguration[]> {
    return this.data$.asObservable();
  }
}
