import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@Component({
  selector: 'registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.scss'],
})
export class RegistationFormComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  password = '';

  constructor() {}

  ngOnInit(): void {}

  toggleForm() {
    this.toggle.emit();
  }
}
