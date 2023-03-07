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
  rentedAreaType: RentedAreaType;
  defultPrice: number;
  maxGuestCount: number;
  arrivalHour: Time;
  departureHour: Time;
}
