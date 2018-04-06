/** ANGULAR REQUIREMENTS */
import { Component,
         EventEmitter,
         Output }             from '@angular/core';

import { AlertController } from 'ionic-angular';

/** APP IMPORTS */
import { ProfileMockService } from '../../services/profile-mock.service';
import { Profile }            from '../../models/interfaces/profile.interface';

/** ANIMATIONS IMPORT */
import { fade }               from '../../app/app.animations';


@Component({
  selector: 'profiles-list',
  templateUrl: 'profiles-list.html',
  animations: [fade]
})
export class ProfilesListComponent {

  //@Output()
  //changeProfile = new EventEmitter();

  profiles: Profile[] = [];
  //fakeItems: Array<any> = new Array(6);

  constructor(private alertCtrl: AlertController,
              private profileService: ProfileMockService) {
    console.log('Hello ProfilesComponent Component');
    this.profiles = this.profileService.getProfiles();
  }

  ionViewDidEnter() {
  }

  set selectedId(inputId: number) {
    this.profileService.selectedId = inputId;
    //this.selectedIdChange.emit(this.profileService.selectedId);
  }

  public selectProfile(id?: number) {
    (id > -1 && this.toggleActive(id)) ? 
      this.clearSelected() : 
      this.profileService.selectedId = id;
      this.profileService.setSelectedProfile();
  }

  public toggleProfile(index: number) {
    if (this.toggleActive(index)) {
      this.profileService.selectedId = null;
      this.profileService.clearSelectedProfile();
    }
    else {
      this.profileService.selectedId = index;
      this.profileService.setSelectedProfile();
    }
  }

  toggleActive(id: number) {
    return (this.profileService.selectedId === id);
  }

  private clearSelected() {
    this.profileService.selectedId = null;
    this.profileService.clearSelectedProfile();
  }

  deleteProfile(index: number) {
    this.alertCtrl.create({
      title: 'Delete Profile',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('dont delete profile')
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.profileService.removeProfile(index);
          }
        }
      ]
    }).present();
    
  }
}
