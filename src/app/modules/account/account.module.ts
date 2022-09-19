import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './page/activate/activate.component';
import { UserDataFormComponent } from './component/user-data-form/user-data-form.component';



@NgModule({
  declarations: [
    ActivateComponent,
    UserDataFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
