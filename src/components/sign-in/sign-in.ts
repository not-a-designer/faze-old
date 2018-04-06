/** ANGULAR REQUIREMENTS */
import { Component,
         EventEmitter,
         Output }            from '@angular/core';

/** APP IMPORTS */
import { PlatformService } from '../../services/platform.service';

/** ANIMATIONS IMPORT */
import { fade }              from '../../app/app.animations';

import { Credentials } from '../../models/interfaces/credentials.interface';


@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.html',
  animations: [ fade ]
})
export class SignInComponent {

  email: string = null;
  password: string = null;

  @Output() 
  authStatus: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  constructor(public platformService: PlatformService) {
    console.log('Hello SignInComponent Component');
  }

  checkValidity(): boolean {
    const e: string = (this.email != null) ? this.email.trim() : this.email;
    const p: string = (this.email != null) ? this.email.trim() : this.email;
    if (e == p) return false;
    else return true;
  }

  dummyLogin() {
    
      let creds: Credentials = {
        user: this.email.trim(),
        password: this.password.trim()
      };
      this.authStatus.emit(creds);

  }

}
