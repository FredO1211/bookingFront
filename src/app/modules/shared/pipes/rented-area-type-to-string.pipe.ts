import { Pipe, PipeTransform } from '@angular/core';
import { RentedAreaType } from '../../account/dto/rented-area-type.enum';

@Pipe({
  name: 'rentedAreaTypeToString',
})
export class RentedAreaTypeToStringPipe implements PipeTransform {
  transform(value: RentedAreaType): string {
    switch (value) {
      case RentedAreaType.APARTMENT.valueOf():
        return 'Apartament';
      case RentedAreaType.BUNGALOW.valueOf():
        return 'Domek wypoczynkowy';
      case RentedAreaType.ROOM.valueOf():
        return 'Pokój';
      case RentedAreaType.NONE.valueOf():
        return 'Brak';
      default:
        return 'Nieznany';
    }
  }
}
