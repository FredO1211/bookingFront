import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig } from '../../../dto/config/button-group-config';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  @Input('config') _config: ButtonConfig[];

  constructor() {}

  ngOnInit(): void {}
}
