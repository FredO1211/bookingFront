import { UserData } from 'src/app/modules/account/component/config-step__user-data-form/io/user-data.dto';
import { Facility } from 'src/app/modules/account/model/facility-configuration.model';

export interface AccountConfigAccountConfig {
  userData: UserData;
  facilities: Facility[];
}
