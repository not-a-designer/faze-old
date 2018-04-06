/** ANGULAR REQUIREMENTS */
import { CUSTOM_ELEMENTS_SCHEMA,
         NgModule }        from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPageModule } from 'ionic-angular';

/** APP IMPORTS */
import { ComponentsModule } from '../../components/components.module';
import { SettingsPage }    from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SettingsPage),
  ],
  exports: [
    SettingsPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SettingsPageModule {}
