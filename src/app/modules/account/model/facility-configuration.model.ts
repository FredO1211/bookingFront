import { Time } from '@angular/common';
import { FacilityType } from '../dto/facility-type.enum';
import { RentedAreaType } from '../dto/rented-area-type.enum';

export interface Facility {
  facilityName: string;
  facilityType: FacilityType;
  rentedAreas: RentedArea[];
}
export interface RentedArea {
  name: string;
  facilityType: RentedAreaType;
  deafultPrice: number;
  maxGuestCount: number;
  arrivalHour: Time;
  arrivalDeparture: Time;
}
