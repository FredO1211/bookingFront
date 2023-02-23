import { Time } from '@angular/common';
import { UserData } from '../../../component/config-step__user-data-form/io/user-data.dto';

export interface AccountConfigurationDTO {
  userData: UserData;
  facilitiesConfiguration: FacilitiesConfiguration;
}

export interface FacilitiesConfiguration {
  facilities: Facility[];
}

export interface Facility {
  facilityName: string;
  facilityType: FacilityType;
  rentedAreas: RentedArea[];
}
export interface RentedArea {
  name: string;
  rentedAreaType: RentedAreaType;
  deafultPrice: number;
  maxGuestCount: number;
  arrivalHour: Time;
  departureHour: Time;
}

export enum FacilityType {
  MULTI_RENTED_FACILITY,
  SINGLE_RENTED_FACILITY,
}

export enum RentedAreaType {
  NONE,
  BUNGALOW,
  ROOM,
  APARTMENT,
}
export { UserData };
