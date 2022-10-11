import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegistationFormComponent } from './component/registation-form/registation-form.component';
import { NgModule } from '@angular/core';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [LoginFormComponent],
})
export class LoginModule {}
