/** ANGULAR REQUIREMENTS */
import { Component } from '@angular/core';


@Component({
  selector: 'personal',
  templateUrl: 'personal.html'
})
export class PersonalComponent {

  text: string;

  constructor() {
    console.log('Hello PersonalComponent Component');
    this.text = 'Hello World';
  }

}
