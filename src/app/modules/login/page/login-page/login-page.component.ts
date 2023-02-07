import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/modules/core/components/logger/service/logger.service';
import { RegistrationDto } from '../../component/registation-form/io/register-form-data';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginService],
})
export class LoginPageComponent implements OnInit {
  loginVisible = true;

  constructor(private service: LoginService) {}

  ngOnInit() {}

  registerUser(registrationDto: RegistrationDto) {
    this.service.registerUser(registrationDto, () => this.toggleForm());
  }

  toggleForm() {
    this.loginVisible = !this.loginVisible;
  }
}
