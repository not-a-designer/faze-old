/** ANGULAR REQUIREMENTS */
import { Component } from '@angular/core';

import { PlatformService } from '../../services/platform.service';


@Component({
  selector: 'personal-info',
  templateUrl: 'personal-info.html'
})
export class PersonalInfoComponent {

  constructor(public platformService: PlatformService) {
    console.log('Hello PersonalInfoComponent Component');
  }

}
