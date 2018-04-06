/** ANGULAR REQUIREMENTS  */
import { Component } from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPage,
         AlertController,
         LoadingController,
         NavController, 
         NavParams } from 'ionic-angular';

/** ANIMATIONS IMPORT */
import { fadeIn, fadeOut }      from '../../app/app.animations';

import { Credentials } from '.././../models/interfaces/credentials.interface';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [ fadeIn, fadeOut ]
})
export class LoginPage {

  authMethod: string = 'login';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toggleAuthMethod() {
    this.authMethod = (this.authMethod === 'login') ? 'register' : 'login';
  }

  dummyLogin(event: Credentials) {
    console.log(event);
    let loader = this.loadingCtrl.create({
      content: 'signing in...'
    });

    loader.onDidDismiss((param?: string) => {
      console.log(param);
      if (!param) this.navCtrl.setRoot('TabsPage', { index: 1 });
      else this.loginError('Login error');
  });

    loader.present();

    if (event.user) setTimeout(() => loader.dismiss(), 2000);
    else loader.dismiss('error');
  }

  featureNotImplemented() {
    this.alertCtrl.create({
      subTitle: 'Sorry!',
      message: 'This feature is coming soon!',
      buttons: ['OK']
    }).present();
  }

  loginError(msg: string) {
    this.alertCtrl.create({
      title: 'Auth Error',
      message: msg,
      buttons: ['OK']
    }).present();
  }

}
