/** ANGULAR REQUIREMENTS */
import { Component }      from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPage, 
         ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile-options',
  templateUrl: 'profile-options.html',
})
export class ProfileOptionsPage {

  constructor(public viewCtrl: ViewController) {
  }

  add() {
    const data: any = { param: 'add'};
    this.viewCtrl.dismiss(data);
  }

  share() {
    const data: any = { param: 'share' };
    this.viewCtrl.dismiss(data);
  }
}
