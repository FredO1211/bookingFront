import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ButtonsDisabilityManageService {
  private addNewHotelFacilityFormPreviousStatus = 'INVALID';
  private newFacilityButtonDisability$ = new BehaviorSubject(true);
  private addNewHotelFacilityFormStatusSubscription: Subscription;

  initAddNewHotelFacilityButtonDisabilityFollowing(formGroup: FormGroup) {
    this.addNewHotelFacilityFormStatusSubscription =
      formGroup.statusChanges.subscribe((result) => {
        debugger;
        if (result != this.addNewHotelFacilityFormPreviousStatus) {
          if (result == 'INVALID') {
            this.newFacilityButtonDisability$.next(true);
            this.addNewHotelFacilityFormPreviousStatus = 'INVALID';
          } else if (result == 'VALID') {
            this.newFacilityButtonDisability$.next(false);
            this.addNewHotelFacilityFormPreviousStatus = 'VALID';
          }
        }
      });
  }

  getAddNewHotelFacilityButtonDisability$(): Observable<boolean> {
    return this.newFacilityButtonDisability$.asObservable();
  }

  closeAddNewHotelFacilityButtonDisabilityFollowing() {
    this.addNewHotelFacilityFormStatusSubscription.unsubscribe();
  }
}
