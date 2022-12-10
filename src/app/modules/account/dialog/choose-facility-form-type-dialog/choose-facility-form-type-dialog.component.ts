import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'choose-facility-form-type-dialog',
  templateUrl: './choose-facility-form-type-dialog.component.html',
  styleUrls: ['./choose-facility-form-type-dialog.component.scss'],
})
export class ChooseFacilityFormTypeDialogComponent implements OnInit {
  constructor(
    private ownReferences: MatDialogRef<ChooseFacilityFormTypeDialogComponent>
  ) {}

  ngOnInit(): void {}

  selectFacilityType(type: string) {
    this.ownReferences.close(type);
  }
}
