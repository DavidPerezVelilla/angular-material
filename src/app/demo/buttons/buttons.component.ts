import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buttons',
  template:`
    <button mat-button>
      <mat-icon aria-hidden="false" aria-label="Example home icon">face</mat-icon>
     Click me!
     </button>
    <mat-checkbox class="example-margin">Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}