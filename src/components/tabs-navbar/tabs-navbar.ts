/** ANGULAR REQUIREMENTS */
import { Component,
         EventEmitter, 
         Input,
         Output }            from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
//import {  } from 'ionic-angular';

/** APP IMPORTS */
import { ProfileMockService } from '../../services/profile-mock.service';

/** ANIMATIONS IMPORT */
import { fadeIn } from '../../app/app.animations';
import { Profile } from '../../models/interfaces/profile.interface';

@Component({
  selector: 'tabs-navbar',
  templateUrl: 'tabs-navbar.html',
  animations: [ fadeIn ]
})
export class TabsNavbarComponent {

  /** DECORATED COMPONENT VARIABLES */
  @Input('activeTab')
  activeTab: number;

  @Input('profileOptions')
  profileOptions: any;

  

  @Input('settingsEnabled')
  settingsEnabled: boolean;

  @Input('title')
  title: string;

  @Output('action')
  action: EventEmitter<string> = new EventEmitter<string>();

  shareEnabled: boolean;

  constructor(public profileService: ProfileMockService) {
    console.log('Hello TabsNavbarComponent Component');
  }

  add() {
    this.action.emit('add');
  }

  camera() {
    this.action.emit('camera');
  }

  details() {
    this.action.emit('details');
  }

  share() {
    this.action.emit('share');
  }

  settings() {
    this.action.emit('settings');
  }

  hide() {
    this.action.emit('hide');
  }

  delete() {
    this.action.emit('delete');
  }

  toggleShare(): boolean {
    const profile: Profile = this.profileService.getSelectedProfile();
    if (!profile.images || profile.images.length < 10) return true;
    else return false;
  }
}
