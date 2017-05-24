import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({  
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage {

	messages: FirebaseListObservable<any>;
	loading: any; 

	constructor(public navCtrl: NavController, private angFire: AngularFire, private loadingCtrl: LoadingController){

		//this.messages = this.angFire.database.list('/Messages');
		
	}

	getTimestamp(Timestamp: any): any {
		var date = new Date(Timestamp *-1);
		var options = {
    		weekday: "short", year: "numeric", month: "short",
    		day: "numeric", hour: "2-digit", minute: "2-digit"
		};
		
		return date.toLocaleTimeString("en-us", options);
	}

}
