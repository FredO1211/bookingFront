import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.setItem('token', '');
    this.router.navigate(['/login']);
  }
}
