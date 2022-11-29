import { FacilityType } from './facility-type.enum';

export interface FacilityFormConfig {
  facilityTypes: FacilityTypeOption[];
}

export interface FacilityTypeOption {
  name: string;
  type: FacilityType;
}
