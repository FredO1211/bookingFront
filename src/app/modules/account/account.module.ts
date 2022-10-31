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
import { FacilityFormDialogComponent } from './dialog/facility-form-dialog/facility-form-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { FacilityDetailsFormDialogComponent } from './dialog/facility-details-form-dialog/facility-details-form-dialog.component';
import { SingleAccommodationFacilityDetailsFormComponent } from './component/single-accommodation-facility-details-form/single-accommodation-facility-details-form.component';
import { MultiAccommodationFacilityDetailsFormComponent } from './component/multi-accommodation-facility-details-form/multi-accommodation-facility-details-form.component';

@NgModule({
  declarations: [
    ActivateComponent,
    UserDataFormComponent,
    CompanyDataFormComponent,
    FacilityConfigFormComponent,
    FacilityFormDialogComponent,
    FacilityDetailsFormDialogComponent,
    SingleAccommodationFacilityDetailsFormComponent,
    MultiAccommodationFacilityDetailsFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MatFormFieldModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
})
export class AccountModule {}
