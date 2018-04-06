/**  ANGULAR REQUIREMENTS */
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA,
         ErrorHandler, 
         NgModule }                from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicApp, 
         IonicErrorHandler, 
         IonicModule }             from 'ionic-angular';

/** APP IMPORTS */         
import { ComponentsModule }        from '../components/components.module';
import { MyApp }                   from './app.component';
import { PlatformService }         from '../services/platform.service';
import { ProfileMockService }      from '../services/profile-mock.service';

/** NATIVE PLUGINS, 3RD PARTY PACKAGE IMPORTS */
import { CameraPreview }           from '@ionic-native/camera-preview'; 
import { StatusBar }               from '@ionic-native/status-bar';
import { SplashScreen }            from '@ionic-native/splash-screen';


@NgModule({
  /** DECLARES MODULE COMPONENTS, DIRECTIVES, PIPES */
  declarations: [
    MyApp
  ],

  /** IMPORTS EXTERNAL MODULES */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],

  /** BOOTSTRAPS THE ROOT 'IONICAPP' COMPONENT */
  bootstrap: [
    IonicApp
  ],

  /** DECLARES COMPONENTS NEEDED AT APP INIT */
  entryComponents: [
    MyApp
  ],

  /** DECLARES GLOBAL SERVICES */
  providers: [
    CameraPreview,
    PlatformService,
    ProfileMockService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],

  /** NEEDED FOR CUSTOM COMPONENTS */
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
