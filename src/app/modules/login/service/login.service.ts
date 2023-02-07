import { Injectable } from '@angular/core';
import { UserApi } from '../../core/api/services/user-api';
import { LoggerService } from '../../core/components/logger/service/logger.service';
import { RegistrationDto } from '../component/registation-form/io/register-form-data';
import { LoginModule } from '../login.module';
import { LoginModuleMapper } from './mapper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private api: UserApi, private logger: LoggerService) {}

  registerUser(registrationDto: RegistrationDto, onsuccess?: VoidFunction) {
    const toSend = LoginModuleMapper.map(registrationDto);
    this.api.register(toSend).subscribe(
      (success) => {
        if (onsuccess) {
          onsuccess();
        }
        this.logger.logInfo(
          'Wysłaliśmy mail z linkiem aktywacyjnym. Proszę sprawdź skrzynkę pocztową'
        );
      },
      (error) => {
        this.logger.logError('Wystąpił błąd');
      }
    );
  }
}
