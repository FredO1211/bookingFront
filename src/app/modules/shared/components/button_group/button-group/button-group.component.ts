import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonGroupConfig } from '../../../dto/config/button-group-config';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  @Input('config') _config: ButtonGroupConfig[];

  @Output('execute') eventEmmiter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  execute(eventName: string) {
    this.eventEmmiter.emit(eventName);
  }

  log(o: any) {
    console.log(o);
  }
}
