import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './page/activate/activate.component';
import { UserDataFormComponent } from './component/config-step__user-data-form/user-data-form.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CompanyDataFormComponent } from './component/config-step__company-data-form/company-data-form.component';
import { FacilityConfigFormComponent } from './component/config-step__facilities-overview/facilities-overview.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FullyRentedFacilityFormDialogComponent } from './dialog/fully-rented-facility-form-dialog/fully-rented-facility-form-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { FacilityFormTypePickerDialogComponent } from './dialog/facility-form-type-picker-dialog/facility-form-type-picker-dialog.component';
import { FacilityFormComponent } from './component/rented-area-form/rented-area-form.component';
import { PartlyRentedFacilityFormDialogComponent } from './dialog/partly-rented-facility-form-dialog/partly-rented-facility-form-dialog.component';
import { HotelFormOverviewComponent } from './component/partly-rented-facility-form/partly-rented-facility-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RentedAreaOverviewComponent } from './component/rented-area-overview/rented-area-overview.component';
import { RentedAreaOverviewDialogComponent } from './dialog/rented-area-overview-dialog/rented-area-overview-dialog.component';

@NgModule({
  declarations: [
    ActivateComponent,
    UserDataFormComponent,
    CompanyDataFormComponent,
    FacilityConfigFormComponent,
    FullyRentedFacilityFormDialogComponent,
    FacilityFormTypePickerDialogComponent,
    FacilityFormComponent,
    PartlyRentedFacilityFormDialogComponent,
    HotelFormOverviewComponent,
    RentedAreaOverviewComponent,
    RentedAreaOverviewDialogComponent,
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
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
})
export class AccountModule {}
