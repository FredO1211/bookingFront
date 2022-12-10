import { RentedAreaType } from './rented-area-type.enum';

export interface FacilityFormConfig {
  facilityTypes: FacilityTypeOption[];
}

export interface FacilityTypeOption {
  name: string;
  type: RentedAreaType;
}
