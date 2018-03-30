/** ANGULAR REQUIREMENTS */
import { Component } from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { Platform } from 'ionic-angular';

/** IONIC NATIVE, 3RD PARTY IMPORTS */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string = 'MenuPage';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
