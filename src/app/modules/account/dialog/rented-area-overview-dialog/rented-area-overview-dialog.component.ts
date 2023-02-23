import { Component, Inject, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { RentedArea } from '../../model/facility-configuration.model';

@Component({
  selector: 'app-rented-area-overview-dialog',
  templateUrl: './rented-area-overview-dialog.component.html',
  styleUrls: ['./rented-area-overview-dialog.component.scss'],
})
export class RentedAreaOverviewDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public _data: FormArray,
    private ownReferences: MatDialogRef<RentedAreaOverviewDialogComponent>
  ) {}

  buttonConfigGroup: ButtonConfig[] = [
    {
      color: 'warn',
      label: 'Zamknij',
      callback: () => this.closeDialog(),
    },
  ];

  ngOnInit(): void {}

  closeDialog() {
    this.ownReferences.close();
  }
}
