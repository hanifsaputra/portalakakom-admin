import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sejarah } from './sejarah';

@NgModule({
  declarations: [
    Sejarah,
  ],
  imports: [
    IonicPageModule.forChild(Sejarah),
  ],
  exports: [
    Sejarah
  ]
})
export class SejarahModule {}
