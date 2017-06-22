import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ViewBerita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-berita',
  templateUrl: 'view-berita.html',
})
export class ViewBerita {
	public items : any = [];
   constructor(public navCtrl: NavController, public http   : Http)
   {

   }
   ionViewWillEnter()
   {
      this.load();
   }
   load()
   {
      this.http.get('http://akakom.96.lt/portal-akakom/tampil-berita-kampus.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }

   addEntry()
   {
      this.navCtrl.push('AddBerita');
   }
   viewEntry(param)
   {
      this.navCtrl.push('AddBerita', param);
  }

  /*onViewDidLoad() {
    console.log('ionViewDidLoad ViewBerita');
  }*/

}
