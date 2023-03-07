import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { valueIsAlreadyExistsValidator } from '../../shared/validators/value-is-already-exists.validator';
import { FacilityType } from '../dto/facility-type.enum';
import { Facility, RentedArea } from '../model/facility-configuration.model';

export class FormGroupGenerator {
  static getFormGroupForPartlyRentedFacility(
    listOfUniqueFacilities: string[],
    facility?: Facility
  ): FormGroup {
    const result = new FormGroup({
      facilityName: new FormControl(facility ? facility.facilityName : '', [
        Validators.required,
        valueIsAlreadyExistsValidator(listOfUniqueFacilities),
      ]),
      facilityType: new FormControl(FacilityType.MULTI_RENTED_FACILITY),
      rentedAreas: new FormArray([]),
    });

    const facilities = result.get('rentedAreas') as FormArray;

    if (facility) {
      facility.rentedAreas.forEach((r) => {
        this.addFacilityFormGroupToFormArray(
          facilities,
          FormGroupGenerator.getListOfRoomNames(facility),
          r
        );
      });
    }

    FormGroupGenerator.addFacilityFormGroupToFormArray(facilities);
    return result;
  }

  static addFacilityFormGroupToFormArray(
    destination: FormArray,
    listOfUniqueRooms?: string[],
    element?: RentedArea
  ) {
    const names = listOfUniqueRooms
      ? listOfUniqueRooms
      : destination.value.map((v: RentedArea) => v.name);

    destination.push(
      new FormGroup({
        name: new FormControl(element ? element.name : '', [
          Validators.required,
          valueIsAlreadyExistsValidator(names),
        ]),
        rentedAreaType: new FormControl(
          element ? element.rentedAreaType : '',
          Validators.required
        ),
        deafultPrice: new FormControl(element ? element.defultPrice : null),
        maxGuestCount: new FormControl(element ? element.maxGuestCount : 0, [
          Validators.required,
          Validators.min(1),
        ]),
        arrivalHour: new FormControl(element ? element.arrivalHour : null),
        departureHour: new FormControl(element ? element.departureHour : null),
      })
    );
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
        facility.rentedAreas[0] ? facility.rentedAreas[0].defultPrice : null
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

  private static getListOfRoomNames(data: Facility): string[] {
    return data ? data.rentedAreas.map((f) => f.name) : [];
  }
}
