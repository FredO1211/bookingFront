import { FormControl, FormGroup, Validators } from '@angular/forms';
import { valueIsAlreadyExistsValidator } from '../../shared/validators/value-is-already-exists.validator';
import { Facility } from '../model/facility-configuration.model';

export class FormGroupGenerator {
  static getFormGroupForHotelForm(
    listOfUniqueElements: string[],
    facilities?: Facility
  ): FormGroup {
    return new FormGroup({
      facilityName: new FormControl(facilities ? facilities.facilityName : ''),
      facilityType: new FormControl(facilities ? facilities.facilityType : ''),
      facility: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          valueIsAlreadyExistsValidator(listOfUniqueElements),
        ]),
        facilityType: new FormControl('', Validators.required),
        deafultPrice: new FormControl(),
        maxGuestCount: new FormControl(0, [
          Validators.required,
          Validators.min(1),
        ]),
        arrivalHour: new FormControl(),
        departureHour: new FormControl(),
      }),
    });
  }
}
