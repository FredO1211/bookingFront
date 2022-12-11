import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogConfig } from 'src/app/modules/shared/dto/config/confirm-dialog-config';
import { RentedArea } from '../../model/facility-configuration.model';

@Component({
  selector: 'app-rented-area-overview-dialog',
  templateUrl: './rented-area-overview-dialog.component.html',
  styleUrls: ['./rented-area-overview-dialog.component.scss'],
})
export class RentedAreaOverviewDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public _data: RentedArea[]) {}

  ngOnInit(): void {}
}
