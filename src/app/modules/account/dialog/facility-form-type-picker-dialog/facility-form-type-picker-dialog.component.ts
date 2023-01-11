import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'choose-facility-form-type-dialog',
  templateUrl: './facility-form-type-picker-dialog.component.html',
  styleUrls: ['./facility-form-type-picker-dialog.component.scss'],
})
export class FacilityFormTypePickerDialogComponent implements OnInit {
  constructor(
    private ownReferences: MatDialogRef<FacilityFormTypePickerDialogComponent>
  ) {}

  ngOnInit(): void {}

  selectFacilityType(type: string) {
    this.ownReferences.close(type);
  }
}
