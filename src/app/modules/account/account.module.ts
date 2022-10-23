import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './page/activate/activate.component';
import { UserDataFormComponent } from './component/user-data-form/user-data-form.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CompanyDataFormComponent } from './component/company-data-form/company-data-form.component';
import { FacilityConfigFormComponent } from './component/facility-config-form/facility-config-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ActivateComponent,
    UserDataFormComponent,
    CompanyDataFormComponent,
    FacilityConfigFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
})
export class AccountModule {}
