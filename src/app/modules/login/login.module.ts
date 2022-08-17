import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegistationFormComponent } from './component/registation-form/registation-form.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    WelcomeComponent,
    RegistationFormComponent,
  ],
  exports: [LoginFormComponent],
})
export class LoginModule {}
