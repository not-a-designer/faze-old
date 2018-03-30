/** ANGULAR REQUIREMENTS */
import { NgModule }           from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS  */
import { IonicPageModule }    from 'ionic-angular';

/** APP IMPORTS */
import { ProfileOptionsPage } from './profile-options';


@NgModule({
  declarations: [
    ProfileOptionsPage
  ],
  imports: [
    IonicPageModule.forChild(ProfileOptionsPage)
  ],
  exports: [
    ProfileOptionsPage
  ]
})
export class ProfileOptionsPageModule {}
