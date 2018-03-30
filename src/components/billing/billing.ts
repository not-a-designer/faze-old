/** ANGULAR REQUIREMENTS */
import { Component } from '@angular/core';


@Component({
  selector: 'billing',
  templateUrl: 'billing.html'
})
export class BillingComponent {

  text: string;

  constructor() {
    console.log('Hello BillingComponent Component');
    this.text = 'Hello World';
  }

}
