import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseFacilityConfigDTO } from '../../models/base-facility-config.dto';
import { FacilityType } from '../../models/facility-type.enum';

@Component({
  selector: 'app-facility-details-form-dialog',
  templateUrl: './facility-details-form-dialog.component.html',
  styleUrls: ['./facility-details-form-dialog.component.scss'],
})
export class FacilityDetailsFormDialogComponent implements OnInit {
  isSingleAccommodationFacility: boolean;
  constructor(
    public ownReferences: MatDialogRef<FacilityDetailsFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public baseConfig: BaseFacilityConfigDTO
  ) {}

  ngOnInit(): void {
    this.isSingleAccommodationFacility = this.isSingleAccomodationFacilityCheck(
      this.baseConfig
    );
  }

  private isSingleAccomodationFacilityCheck(
    baseConfig: BaseFacilityConfigDTO
  ): boolean {
    return baseConfig.type.toString() != 'FacilityType.HOTEL';
  }
}
