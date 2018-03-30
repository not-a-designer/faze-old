import { Component } from '@angular/core';


@Component({
  selector: 'profiles',
  template: `
    <ng-content></ng-content>
  `
  //templateUrl: 'profiles.html'
})
export class ProfilesComponent {

  text: string;

  constructor() {
    console.log('Hello ProfilesComponent Component');
    this.text = 'Hello World';
  }

}
