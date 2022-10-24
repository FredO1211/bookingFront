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
import { FacilityConfigFormComponent } from './component/facility-config-form/facility-config-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { LostDataConfirmDialogComponent } from '../shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { FacilityFormDialogComponent } from './dialog/facility-form-dialog/facility-form-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ActivateComponent,
    UserDataFormComponent,
    CompanyDataFormComponent,
    FacilityConfigFormComponent,
    LostDataConfirmDialogComponent,
    FacilityFormDialogComponent,
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
    MatDividerModule,
    MatSelectModule,
  ],
})
export class AccountModule {}
