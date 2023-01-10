import { Pipe, PipeTransform } from '@angular/core';
import { FacilityType } from '../../account/dto/facility-type.enum';

@Pipe({
  name: 'facilityTypeToString',
})
export class FacilityTypeToStringPipe implements PipeTransform {
  transform(value: FacilityType): String {
    switch (value) {
      case FacilityType.MULTI_RENTED_FACILITY.valueOf():
        return 'Obiekt wynajmowany na pokoje';
      case FacilityType.SINGLE_RENTED_FACILITY.valueOf():
        return 'Obiekt wynajmowany w całości';
      default:
        return 'Nieznany';
    }
  }
}
