import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeContextHolderService {
  private selectedDay = new BehaviorSubject<Date | null>(null);

  getSelectedDate$(): Observable<any> {
    return this.selectedDay.asObservable();
  }

  setSelectedDate(date: Date) {
    this.selectedDay.next(date);
  }

  constructor() {}
}
