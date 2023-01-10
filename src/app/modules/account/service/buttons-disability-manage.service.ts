import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ButtonsDisabilityManageService {
  private addNewHotelFacilityFormPreviousStatus = 'INVALID';
  private newFacilityButtonDisability$ = new BehaviorSubject(true);
  private addNewHotelFacilityFormStatusSubscription: Subscription;

  initNewHook(formGroup: FormGroup | FormControl) {
    this.addNewHotelFacilityFormStatusSubscription =
      formGroup.statusChanges.subscribe((result) => {
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

  getButtonDisability$(): Observable<boolean> {
    return this.newFacilityButtonDisability$.asObservable();
  }

  unfollow() {
    this.addNewHotelFacilityFormStatusSubscription.unsubscribe();
  }
}
