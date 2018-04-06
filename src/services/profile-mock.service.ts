import { Injectable } from '@angular/core';

import { Profile }    from '../models/interfaces/profile.interface';
import * as moment from 'moment';


@Injectable()
export class ProfileMockService {

    private sampleDate: string = moment().format('MM-DD-YYYY|HH:mm:ssA');
    private sampleProfiles: Array<Profile> = [
        {
          dateCreated: this.sampleDate,
          id: 0,
          name: 'Profile 1',
          desc: 'This is the description for Profile 1',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 1,
          name: 'Profile 2',
          desc: 'This is the description for Profile 2',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 2,
          name: 'Profile 3',
          desc: 'This is the description for Profile 3',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 3,
          name: 'Profile 4',
          desc: 'This is the description for Profile 4',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 4,
          name: 'Profile 5',
          desc: 'This is the description for Profile 5',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 5,
          name: 'Profile 6',
          desc: 'This is the description for Profile 6',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 6,
          name: 'Profile 7',
          desc: 'This is the description for Profile 7',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }, {
          dateCreated: this.sampleDate,
          id: 7,
          name: 'Profile 8',
          desc: 'This is the description for Profile 8',
          images: [
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350',
            'http://via.placeholder.com/350x350'
          ]
        }
      ];

      private _selectedId: number = null;
      selectedProfile: Profile;

    constructor() {
      this.selectedId = null;
    }

    set selectedId(id: number) { this._selectedId = id }
    get selectedId(): number { 
      console.log(this._selectedId);
      return this._selectedId;
    }

    getSelectedProfile(): Profile {
      return this.sampleProfiles[this.selectedId];
    }

    setSelectedProfile() {
      this.selectedProfile = this.sampleProfiles[this._selectedId];
    }

    clearSelectedProfile() {
      this.selectedProfile = null;
    }



    getProfiles(): Profile[] {
       return this.sampleProfiles.slice();
    }
    getProfile(index: number): Profile {
        return this.sampleProfiles[index];
    }

    addProfile(p: Profile) {
        this.sampleProfiles.concat(p);
    }

    removeProfile(index: number) {
        this.sampleProfiles.splice(index, 1);
    }

    updateProfile(index: number, p: Profile) {
        this.sampleProfiles[index] = p;
    }
}