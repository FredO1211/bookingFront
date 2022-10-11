import { Component, OnInit } from '@angular/core';
import { ButtonGroupConfig } from 'src/app/modules/shared/dto/config/button-group-config';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  toggle = false;

  constructor() {}

  ngOnInit(): void {}

  getButtonGroupConfig(): ButtonGroupConfig[] {
    const configList: ButtonGroupConfig[] = [];
    configList.push(new ButtonGroupConfig('primary', 'label1', 'event'));
    configList.push(new ButtonGroupConfig('primary', 'label2', 'event'));
    configList.push(new ButtonGroupConfig('primary', 'label3', 'event'));
    configList.push(new ButtonGroupConfig('primary', 'label4', 'event'));

    return configList;
  }
}
