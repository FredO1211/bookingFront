import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountConfigAccountConfig } from 'src/app/modules/core/api/activate/model/account-config.model';
import { FacilitiesConfigurationDataService } from '../../../service/facilities-configuration-data.service';
import { FormGroupHolder } from './form-group-holder.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private formGroupHolder: FormGroupHolder,
    private dataService: FacilitiesConfigurationDataService
  ) {}

  activateAccount() {
    const userData = this.formGroupHolder.getUserDataFormGroup().value;
    const facilities = this.dataService.getFacilities();

    let model: AccountConfigAccountConfig = {
      userData: userData,
      facilities: facilities,
    };
  }
}
