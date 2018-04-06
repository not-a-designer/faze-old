/** ANGULAR REQUIREMENTS */
import { Component }      from '@angular/core';

/** APP IMPORTS */
import { SocialMetadata } from '../../models/interfaces/social-metadata.interface';


@Component({
  selector: 'sharing-list',
  templateUrl: 'sharing-list.html'
})
export class SharingListComponent {

  socialData: Array<SocialMetadata> = [
    {
      icon: 'logo-google',
      text: 'Google',
      name: 'google'
    }, {
      icon: 'logo-facebook',
      text: 'Facebook',
      name: 'facebook'
    }, {
      icon: 'logo-instagram',
      text: 'Instagram',
      name: 'instagram'
    }, {
      icon: 'logo-twitter',
      text: 'Twitter',
      name: 'twitter'
    }, {
      icon: 'mail',
      text: 'Email',
      name: 'email'
    }
  ];

  constructor() {
    console.log('Hello SharingComponent Component');
  }

}
