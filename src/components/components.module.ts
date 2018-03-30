/** ANGULAR REQUIREMENTS */
import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicModule }             from 'ionic-angular';

/** APP IMPORTS */
import { ProfilesComponent }       from './profiles/profiles';
import { ProfileDetailsComponent } from './profile-details/profile-details';
import { TabsNavbarComponent }     from './tabs-navbar/tabs-navbar';
import { PersonalComponent }       from './personal/personal';
import { BillingComponent } from './billing/billing';
import { ShippingComponent } from './shipping/shipping';


@NgModule({
	declarations: [
		ProfilesComponent,
	    ProfileDetailsComponent,
	    TabsNavbarComponent,
    	PersonalComponent,
    	BillingComponent,
    	ShippingComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		ProfilesComponent,
	    ProfileDetailsComponent,
		TabsNavbarComponent,
    	PersonalComponent,
    	BillingComponent,
    	ShippingComponent
	]
})
export class ComponentsModule {}
