import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleForm() {
    this.toggle.emit();
  }
}
