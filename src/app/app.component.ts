import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { Sejarah } from '../pages/sejarah/sejarah';
//import { Visimisi } from '../pages/visimisi/visimisi';
//import { Jurusan } from '../pages/jurusan/jurusan';
import { Berita } from '../pages/berita/berita';
import { Info } from '../pages/info/info';
//import { Tautan } from '../pages/tautan/tautan';
//import { AddBerita } from '../pages/add-berita/add-berita';
import { ViewBerita } from '../pages/view-berita/view-berita';
import { Login } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'Sejarah', component: Sejarah },
      //{ title: 'Visi & Misi', component: Visimisi },
      //{ title: 'Jurusan', component: Jurusan },
      //{ title: 'Berita', component: Berita },
      { title: 'Info', component: Info },
      //{ title: 'Tautan', component: Tautan },
      //{ title: 'Add Berita', component: AddBerita },
      { title: 'Berita', component: ViewBerita }
      //{ title: 'Login', component: Login }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
