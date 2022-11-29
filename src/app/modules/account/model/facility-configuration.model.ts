import { Time } from '@angular/common';
import { FacilityType } from '../dto/facility-type.enum';

export interface FacilitiesConfiguration {
  hotelName: string;
  facilities: Facility[];
}
export interface Facility {
  name: string;
  facilityType: FacilityType;
  deafultPrice: number;
  maxGuestCount: number;
  arrivalHour: Time;
  arrivalDeparture: Time;
}
