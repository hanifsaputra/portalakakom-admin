import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ITautan } from './i-tautan';

@NgModule({
  declarations: [
    ITautan,
  ],
  imports: [
    IonicPageModule.forChild(ITautan),
  ],
  exports: [
    ITautan
  ]
})
export class ITautanModule {}
