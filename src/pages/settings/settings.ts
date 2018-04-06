/** ANGULAR REQUIREMENTS */
import { Component }      from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPage,
         AlertController,
         LoadingController,
         Platform,
         ToastController, 
         ViewController } from 'ionic-angular';

/** APP IMPORTS */
import { PlatformService } from '../../services/platform.service';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  //settingsPage: string;
  //isVerified: boolean;

  constructor(public viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController, 
              private toastCtrl: ToastController,
              public platformService: PlatformService) {
  }

  ionViewDidEnter() {
    //this.settingsPage = 'personal';
    //this.isVerified = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    //this.settingsPage = 'personal';
    //this.isVerified = false;
    //this.settingsSlide.lockSwipes(true);
    //this.content.resize();
  }

  /*showPersonal() {
    this.settingsSlide.lockSwipes(false);
    this.settingsSlide.slideTo(0);
    this.settingsSlide.lockSwipes(true);
    this.isVerified = false;
  }*/

  update() {
    let loading = this.loadingCtrl.create({
      content: 'updating personal info...'
    });

    loading.onDidDismiss(() => {
      this.dismiss();
      this.toastHandler('Success: personal info updated!');
    });

    loading.present();
    setTimeout(() => loading.dismiss(), 1000);
  }

  verify() {
    let loading = this.loadingCtrl.create({
      content: 'verifying...'
    });

    loading.onDidDismiss(() => {
      //this.isVerified = true;
      //this.content.resize();
    });
    loading.present();

    setTimeout(() => loading.dismiss(), 1000);
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
          handler: () => {
            this.viewCtrl.dismiss('logout');
            this.toastHandler('Logged out!');
            //console.log('logged out!');
          }
        }
      ]
    }).present();
  }

  private toastHandler(msg: string) {
    this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      duration: 1500
    }).present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
