import { RentedAreaType } from './rented-area-type.enum';

export interface FacilityFormConfig {
  rentedAreaTypes: RentedAreaTypeTypeOption[];
}

export interface RentedAreaTypeTypeOption {
  name: string;
  type: RentedAreaType;
}
