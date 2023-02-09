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

  static getFormGroupForFullyRentedFacility(
    listOfUniqueRooms: string[],
    facility: Facility
  ): FormGroup {
    return new FormGroup({
      name: new FormControl(
        facility.rentedAreas[0] ? facility.rentedAreas[0].name : '',
        [Validators.required, valueIsAlreadyExistsValidator(listOfUniqueRooms)]
      ),
      rentedAreaType: new FormControl(
        facility.rentedAreas[0] ? facility.rentedAreas[0].rentedAreaType : '',
        Validators.required
      ),
      deafultPrice: new FormControl(
        facility.rentedAreas[0] ? facility.rentedAreas[0].deafultPrice : null
      ),
      maxGuestCount: new FormControl(
        facility.rentedAreas[0] ? facility.rentedAreas[0].maxGuestCount : 0,
        [Validators.required, Validators.min(1)]
      ),
      arrivalHour: new FormControl(
        facility.rentedAreas[0] ? facility.rentedAreas[0].arrivalHour : null
      ),
      departureHour: new FormControl(
        facility.rentedAreas[0] ? facility.rentedAreas[0].departureHour : null
      ),
    });
  }
}
