import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoadingController} from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;
  loader: any;
  messages: FirebaseListObservable<any>; 
   
  constructor(public auth: Auth, public loadingCtrl: LoadingController) {
  	
  	this.presentLoading();

  	this.auth.login().then((isLoggedIn) => {
  		if (isLoggedIn){
  			this.rootPage = TabsPage;
  		}
  		else
  		{
  			this.rootPage = LoginPage;
  		}
  		
  		this.loader.dismiss();	
  	});
  }

	presentLoading(){
		this.loader = this.loadingCtrl.create({
			content: "loading........"
		});
		
		this.loader.present();
	}	
}
