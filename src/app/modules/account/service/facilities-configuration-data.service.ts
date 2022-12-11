import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Facility } from '../model/facility-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesConfigurationDataService extends DataSource<Facility> {
  private data: Facility[] = [];
  private data$ = new BehaviorSubject(this.data);

  connect(): Observable<readonly Facility[]> {
    return this.data$.asObservable();
  }
  disconnect(): void {}

  insert(toInsert: Facility) {
    this.data.push(toInsert);
    this.data$.next(this.data);
  }

  getData$(): Observable<Facility[]> {
    return this.data$.asObservable();
  }

  removeByIndex(index: number) {
    this.data.splice(index, 1);
    this.data$.next(this.data);
  }
}
