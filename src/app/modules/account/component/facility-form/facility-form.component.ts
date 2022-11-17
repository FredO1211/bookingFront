import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LostDataConfirmDialogComponent } from 'src/app/modules/shared/dialog/lost-data-confirm-dialog/lost-data-confirm-dialog.component';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';
import { ConfirmDialogStatus } from 'src/app/modules/shared/dto/config/confim-dialog-status.enum';

@Component({
  selector: 'facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.scss'],
})
export class FacilityFormComponent implements OnInit {
  @Input('formConfig') baseFacilityConfig: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
