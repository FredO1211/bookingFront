import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Credentials } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  signIn(credentials: Credentials) {
    this.authService.login(credentials).subscribe(
      (result) => {
        console.log(result.valueOf());
        if (result) this.router.navigate(['/calendar']);
        else this.invalidLogin = true;
      },
      (err) => {
        if (err.status == 200) {
          localStorage.setItem('token', err.error.text);
          this.router.navigate(['/calendar']);
        } else {
          this.invalidLogin = true;
        }
      }
    );
  }

  ngOnInit(): void {}
}
