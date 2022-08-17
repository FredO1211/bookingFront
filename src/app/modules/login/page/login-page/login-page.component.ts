import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginVisible = true;

  constructor() {}

  ngOnInit() {}

  toggleForm() {
    this.loginVisible = !this.loginVisible;
  }
}
