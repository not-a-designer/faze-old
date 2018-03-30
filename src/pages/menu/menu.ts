/** ANGULAR REQUIREMENTS */
import { Component, 
         ViewChild }         from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */         
import { IonicPage, 
         AlertController,
         Nav, 
         NavController, 
         NavParams,
         PopoverController } from 'ionic-angular';

/** ANIMATIONS IMPORT */         
import { fade }              from '../../app/app.animations';


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
              private alertCtrl: AlertController,
              //private popoverCtrl: PopoverController
  ) {
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

  logout() {
    this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('dont log out')
        }, {
          text: 'Logout',
          handler: () => console.log('logged out!')
        }
      ]
    }).present();
  }
}
