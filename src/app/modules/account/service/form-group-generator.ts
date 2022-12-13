import { FormControl, FormGroup, Validators } from '@angular/forms';
import { valueIsAlreadyExistsValidator } from '../../shared/validators/value-is-already-exists.validator';
import { Facility } from '../model/facility-configuration.model';

export class FormGroupGenerator {
  static getFormGroupForHotelForm(
    listOfUniqueFacilities: string[],
    listOfUniqueRooms: string[],
    facility?: Facility
  ): FormGroup {
    return new FormGroup({
      facilityName: new FormControl(facility ? facility.facilityName : '', [
        Validators.required,
        valueIsAlreadyExistsValidator(listOfUniqueFacilities),
      ]),
      facilityType: new FormControl(facility ? facility.facilityType : ''),
      facility: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          valueIsAlreadyExistsValidator(listOfUniqueRooms),
        ]),
        rentedAreaType: new FormControl('', Validators.required),
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
