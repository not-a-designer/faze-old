/** ANGULAR REQUIREMENTS */
import { Component, 
         ViewChild } from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */         
import { IonicPage, 
         Nav, 
         NavController, 
         NavParams,
         PopoverController } from 'ionic-angular';

/** ANIMATIONS IMPORT */         
import { fade } from '../../app/app.animations';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  animations: [fade]
})
export class MenuPage {

  /** DECORATED PAGE VARIABLES */
  @ViewChild(Nav)
  nav: Nav;

  /**PAGE VARIABLES */
  rootPage: string = 'TabsPage';
  params: any;
  settingsPage: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private popoverCtrl: PopoverController) {
  }

  /** LIFECYCLE HOOKS*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.settingsPage = 'personal';
  }


  /** MENU PAGE FUNCTIONS */
  slideToProfiles() {
    this.nav.setRoot('TabsPage', { index: 1 });
  }

  showBilling(event) {
    let billingPop = this.popoverCtrl.create('BillingPage');
    billingPop.present({
      ev: event
    });
  }

  showShipping() {

  }

}
