import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  toggle = false;

  constructor() { }

  ngOnInit(): void {
  }
}
