import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBerita } from './view-berita';

@NgModule({
  declarations: [
    ViewBerita,
  ],
  imports: [
    IonicPageModule.forChild(ViewBerita),
  ],
  exports: [
    ViewBerita
  ]
})
export class ViewBeritaModule {}
