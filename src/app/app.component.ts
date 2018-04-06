/** ANGULAR REQUIREMENTS */
import { Component }    from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { Platform }     from 'ionic-angular';

/** IONIC NATIVE, 3RD PARTY IMPORTS */
import { StatusBar }    from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer }        from 'rxjs/observable/timer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string = 'LoginPage';

  showSplash: boolean = true;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(2000).subscribe(() => this.showSplash = false);
    });
  }
}
