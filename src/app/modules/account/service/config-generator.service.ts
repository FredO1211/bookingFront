import { Injectable } from '@angular/core';
import { FacilityFormConfig } from '../dto/facility-form-config.dto';
import { FacilityType } from '../dto/facility-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ConfigGeneratorService {
  constructor() {}

  getFacilityFormConfigForHotel(): FacilityFormConfig {
    return {
      facilityTypes: [
        { name: 'Pokój', type: FacilityType.ROOM },
        { name: 'Apartament', type: FacilityType.APARTMENT },
      ],
    };
  }

  getDefaultFacilityFormConfig(): FacilityFormConfig {
    return {
      facilityTypes: [
        { name: 'Domek wypoczynkowy', type: FacilityType.BUNGALOW },
        { name: 'Pokój', type: FacilityType.ROOM },
        { name: 'Apartament', type: FacilityType.APARTMENT },
      ],
    };
  }
}
