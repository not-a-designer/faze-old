/** ANGULAR REQUIREMENTS */
import { Component } from '@angular/core';


@Component({
  selector: 'shipping',
  templateUrl: 'shipping.html'
})
export class ShippingComponent {

  text: string;

  constructor() {
    console.log('Hello ShippingComponent Component');
    this.text = 'Hello World';
  }

}
