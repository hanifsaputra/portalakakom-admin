import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBerita } from './add-berita';

@NgModule({
  declarations: [
    AddBerita,
  ],
  imports: [
    IonicPageModule.forChild(AddBerita),
  ],
  exports: [
    AddBerita
  ]
})
export class AddBeritaModule {}
