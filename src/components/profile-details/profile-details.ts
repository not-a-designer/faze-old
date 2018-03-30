/** ANGULAR REQUIREMENTS */
import { Component } from '@angular/core';


@Component({
  selector: 'profile-details',
  template: `
    <ng-content></ng-content>
  `
})
export class ProfileDetailsComponent {


  text: string;

  constructor() {
    console.log('Hello ProfileDetailsComponent Component');
    this.text = 'Hello World';
  }

}
