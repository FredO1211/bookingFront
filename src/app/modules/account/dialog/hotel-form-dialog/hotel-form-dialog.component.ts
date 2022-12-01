import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hotel-form-dialog',
  templateUrl: './hotel-form-dialog.component.html',
  styleUrls: ['./hotel-form-dialog.component.scss'],
})
export class HotelFormDialogComponent implements OnInit {
  constructor(private ownReferences: MatDialogRef<HotelFormDialogComponent>) {}

  ngOnInit(): void {}

  save() {
    this.closeDialog();
  }

  closeDialog(dialogResult?: any) {
    this.ownReferences.close(dialogResult);
  }
}
