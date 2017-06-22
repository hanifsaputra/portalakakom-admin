import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-add-berita',
  templateUrl: 'add-berita.html',
})
export class AddBerita {
   public form              		: FormGroup;
   public beritaJudul       		: any;
   public beritaContent				  : any;
   //public beritaImages				  : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://akakom.96.lt/portal-akakom/";


  constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController)
   {

      // Create form builder validation rules
      this.form = fb.group({
         "judul"                 	: ["", Validators.required],
         "content"					      : ["", Validators.required]//,
         //"images"					        : ["", Validators.required]
      });
   }

	ionViewWillEnter()
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Edit Berita Kampus';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Buat Berita Kampus';
      }
   }
   resetFields() : void
   {
      this.beritaJudul           = "";
      this.beritaContent    		= "";
      //this.beritaImages    		= "";
   }
   selectEntry(item)
   {
      this.beritaJudul			= item.judul;
      this.beritaContent 		= item.content;
      //this.beritaImages 		= item.images;
      this.recordID				= item.id_berita_kampus;
   }

   createEntry(judul, content)
   {
      let body     : string   = "key=create&judul=" + judul + "&content=" + content ,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "manage-data-berita-kampus.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Berita: ${judul} was successfully added`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }
   sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }

   updateEntry(judul, content)
   {
      let body       : string = "key=update&judul=" + judul + "&content=" + content + "&recordID=" + this.recordID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "manage-data-berita-kampus.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm  =  true;
            this.sendNotification(`Congratulations the News: ${judul} was successfully updated`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }

   deleteEntry()
   {
      let judul       : string = this.form.controls["judul"].value,
          body       : string    = "key=delete&recordID=" + this.recordID,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any    = new Headers({ 'Content-Type': type}),
          options    : any    = new RequestOptions({ headers: headers }),
          url        : any    = this.baseURI + "manage-data-berita-kampus.php";

      this.http.post(url, body, options)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm     = true;
            this.sendNotification(`Congratulations the berita: ${judul} was successfully deleted`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }

   saveEntry()
   {
      let judul     : string    = this.form.controls["judul"].value,
          content   : string    = this.form.controls["content"].value
          //////,images    : string    = this.form.controls["images"].value
          ;

      if(this.isEdited)
      {
         this.updateEntry(judul, content);
      }
      else
      {
         this.createEntry(judul, content);
      }
   }

   
  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AddBerita');
  }*/

}
