import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './page/activate/activate.component';
import { UserDataFormComponent } from './component/user-data-form/user-data-form.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ActivateComponent, UserDataFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
  ],
})
export class AccountModule {}
