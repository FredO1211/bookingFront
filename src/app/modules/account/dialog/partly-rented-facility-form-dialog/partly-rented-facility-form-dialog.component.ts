import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hotel-form-dialog',
  templateUrl: './partly-rented-facility-form-dialog.component.html',
  styleUrls: ['./partly-rented-facility-form-dialog.component.scss'],
})
export class PartlyRentedFacilityFormDialogComponent implements OnInit {
  constructor(
    private ownReferences: MatDialogRef<PartlyRentedFacilityFormDialogComponent>
  ) {}

  ngOnInit(): void {}

  save() {
    this.closeDialog();
  }

  closeDialog(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }
}
