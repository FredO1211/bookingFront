import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegistationFormComponent } from './component/registation-form/registation-form.component';
import { NgModule } from '@angular/core';

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
