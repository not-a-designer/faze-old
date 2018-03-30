/** ANGULAR REQUIREMENTS */
import { Component,
         EventEmitter, 
         Input,
         Output }            from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { PopoverController } from 'ionic-angular';


@Component({
  selector: 'tabs-navbar',
  templateUrl: 'tabs-navbar.html'
})
export class TabsNavbarComponent {

  /** DECORATED COMPONENT VARIABLES */
  @Input('activeTab')
  activeTab: number;

  @Output('action')
  action: EventEmitter<string> = new EventEmitter<string>();

  constructor(private popoverCtrl: PopoverController) {
    console.log('Hello TabsNavbarComponent Component');
  }

  showOptions(event) {
    let popover = this.popoverCtrl.create('ProfileOptionsPage');

    popover.onDidDismiss((data) => {
      if (data) {
        console.log(data);
        this.action.emit(data.param);
      }
    });
    popover.present({
      ev: event
    });
  }

}
