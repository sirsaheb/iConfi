import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {

    apiKey: "AIzaSyAnoUrDoHCIYDgozqqNvI8grIaihRwbfLo",
    authDomain: "glowing-inferno-4265.firebaseapp.com",
    databaseURL: "https://glowing-inferno-4265.firebaseio.com",
    storageBucket: "glowing-inferno-4265.appspot.com",
    messagingSenderId: "450272212729"

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    LoginPage
],

imports: [

	IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)
],
  

bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    LoginPage
],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth]
})

export class AppModule {}
