import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegistationFormComponent } from './component/registation-form/registation-form.component';
import { NgModule } from '@angular/core';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    WelcomeComponent,
    RegistationFormComponent,
  ],
  imports: [
    PasswordStrengthMeterModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LoginFormComponent],
})
export class LoginModule {}
