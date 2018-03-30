/** ANGULAR REQUIREMENTS */
import { CUSTOM_ELEMENTS_SCHEMA,
         NgModule }        from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPageModule } from 'ionic-angular';

/** APP IMPORTS */
import { ComponentsModule } from '../../components/components.module';
import { MenuPage }         from './menu';


@NgModule({
  declarations: [
    MenuPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MenuPage)
  ],
  exports: [
    MenuPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MenuPageModule {}
