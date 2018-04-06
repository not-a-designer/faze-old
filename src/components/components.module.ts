/** ANGULAR REQUIREMENTS */
import { NgModule }                from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule }            from '@angular/common';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicModule }             from 'ionic-angular';

/** APP IMPORTS */
import { ProfilesListComponent }   from './profiles-list/profiles-list';
import { ProfileDetailsComponent } from './profile-details/profile-details';
import { TabsNavbarComponent }     from './tabs-navbar/tabs-navbar';
import { PersonalInfoComponent }       from './personal-info/personal-info';
import { SharingListComponent }    from './sharing-list/sharing-list';
import { ProfileMockService }      from '../services/profile-mock.service';
import { SignInComponent }         from './sign-in/sign-in';
import { SignUpComponent }         from './sign-up/sign-up';


@NgModule({
	declarations: [
		ProfilesListComponent,
	    ProfileDetailsComponent,
	    TabsNavbarComponent,
    	PersonalInfoComponent,
    	SharingListComponent,
        SignInComponent,
        SignUpComponent
	],
	imports: [
		//BrowserAnimationsModule,
		CommonModule,
		IonicModule
	],
	exports: [
		CommonModule,
		ProfilesListComponent,
	    ProfileDetailsComponent,
		TabsNavbarComponent,
    	PersonalInfoComponent,
    	SharingListComponent,
        SignInComponent,
        SignUpComponent
	],
	providers: [ ProfileMockService ]
})
export class ComponentsModule {}
