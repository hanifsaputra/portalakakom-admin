import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailInfo } from './detail-info';

@NgModule({
  declarations: [
    DetailInfo,
  ],
  imports: [
    IonicPageModule.forChild(DetailInfo),
  ],
  exports: [
    DetailInfo
  ]
})
export class DetailInfoModule {}
