import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Visimisi } from './visimisi';

@NgModule({
  declarations: [
    Visimisi,
  ],
  imports: [
    IonicPageModule.forChild(Visimisi),
  ],
  exports: [
    Visimisi
  ]
})
export class VisimisiModule {}
