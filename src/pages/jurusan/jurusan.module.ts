import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Jurusan } from './jurusan';

@NgModule({
  declarations: [
    Jurusan,
  ],
  imports: [
    IonicPageModule.forChild(Jurusan),
  ],
  exports: [
    Jurusan
  ]
})
export class JurusanModule {}
