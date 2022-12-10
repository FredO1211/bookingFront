import { Injectable } from '@angular/core';
import { FacilityFormConfig } from '../dto/facility-form-config.dto';
import { RentedAreaType } from '../dto/rented-area-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ConfigGeneratorService {
  constructor() {}

  getFacilityFormConfigForHotel(): FacilityFormConfig {
    return {
      facilityTypes: [
        { name: 'Pokój', type: RentedAreaType.ROOM },
        { name: 'Apartament', type: RentedAreaType.APARTMENT },
      ],
    };
  }

  getDefaultFacilityFormConfig(): FacilityFormConfig {
    return {
      facilityTypes: [
        { name: 'Domek wypoczynkowy', type: RentedAreaType.BUNGALOW },
        { name: 'Pokój', type: RentedAreaType.ROOM },
        { name: 'Apartament', type: RentedAreaType.APARTMENT },
      ],
    };
  }
}
