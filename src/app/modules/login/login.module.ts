import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { WelcomeComponent } from './component/welcome/welcome.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
