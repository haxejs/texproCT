import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-machineDetail',
    templateUrl: 'machineDetail.html'
})
export class MachineDetailPage {
	constructor(private navCtrl: NavController, private navParams: NavParams) {
	  	console.dir(navParams);
	}

	doRefresh(refresher) {
	    console.log('Begin async operation', refresher);

	    setTimeout(() => {
	      console.log('Async operation has ended');
	      refresher.complete();
	    }, 2000);
	}  
}