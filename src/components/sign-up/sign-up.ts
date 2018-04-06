/** angular requirements */
import { Component,
         EventEmitter,
         Output } from '@angular/core';

import { PlatformService } from '../../services/platform.service';
import { Credentials } from '../../models/interfaces/credentials.interface';


@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpComponent {

  @Output()
  authStatus: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  email: string = null;
  password: string = null;
  confirm: string = null;

  constructor(public platformService: PlatformService) {
    console.log('Hello SignUpComponent Component');
  }

  checkValidity(): boolean {
    const e: string = (this.email != null) ? this.email.trim() : this.email;
    const p: string = (this.password != null) ? this.password.trim() : this.password;
    const c: string = (this.confirm != null) ? this.confirm.trim() : this.confirm;

    if (e == null || p == null || c == null) return false;
    if (e.length < 3) return false;
    if (p.length < 6) return false;
    else if (c !== p) return false;
    else return true;
  }

  dummyRegister() {
      const creds: Credentials = {
        user: this.email.trim(),
        password: this.password.trim()
      };
      this.authStatus.emit(creds);

  }
}
