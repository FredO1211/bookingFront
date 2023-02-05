import { NewUserDTO } from '../../core/api/model/user/new-user-dto';
import { RegistrationDto } from '../component/registation-form/io/register-form-data';

export class LoginModuleMapper {
  static map(source: RegistrationDto): NewUserDTO {
    return {
      email: source.email,
      password: source.password,
    };
  }
}
