import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable} from 'angularfire2';


@Injectable()
export class Auth {
	messages: FirebaseListObservable<any>;
	
  	constructor(public http: Http,private angFire: AngularFire) {
    	console.log('Hello Auth Provider');
  	}

    login(){
        
        return new Promise((resolve ) => {
            
   
            this.angFire.database.list('/Messages').then(() =>{
            	resolve(true);
            });
        
        
        });
        
    }
}
