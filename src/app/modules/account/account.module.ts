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
import { FacilityConfigFormComponent } from './component/facilities-overview/facilities-overview.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FacilityFormDialogComponent } from './dialog/facility-form-dialog/facility-form-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { ChooseFacilityFormTypeDialogComponent } from './dialog/choose-facility-form-type-dialog/choose-facility-form-type-dialog.component';
import { FacilityFormComponent } from './component/facility-form/facility-form.component';
import { HotelFormDialogComponent } from './dialog/hotel-form-dialog/hotel-form-dialog.component';
import { HotelFormOverviewComponent } from './component/multi-rented-form/multi-rented-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ActivateComponent,
    UserDataFormComponent,
    CompanyDataFormComponent,
    FacilityConfigFormComponent,
    FacilityFormDialogComponent,
    ChooseFacilityFormTypeDialogComponent,
    FacilityFormComponent,
    HotelFormDialogComponent,
    HotelFormOverviewComponent,
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
