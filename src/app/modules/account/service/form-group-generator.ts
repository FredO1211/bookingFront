import { FormControl, FormGroup, Validators } from '@angular/forms';
import { valueIsAlreadyExistsValidator } from '../../shared/validators/value-is-already-exists.validator';

export class FormGroupGenerator {
  static getFormGroupForHotelForm(listOfUniqueElements: string[]): FormGroup {
    return new FormGroup({
      facilityName: new FormControl(''),
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
        arrivalDeparture: new FormControl(),
      }),
    });
  }
}
