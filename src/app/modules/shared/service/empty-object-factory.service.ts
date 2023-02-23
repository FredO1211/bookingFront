import { UserData } from '../../account/page/activate/dto/account-configuration.dto';

export const emptyUserData = (): UserData => ({
  name: '',
  lastName: '',
  city: '',
  houseNumber: '',
  flatNumber: '',
  post: '',
  zipCode: '',
});
