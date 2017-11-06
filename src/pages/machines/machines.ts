import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineDetailPage } from '../machines/machineDetail';



@Component({
	selector: 'page-machines',
    templateUrl: 'machines.html'
})
export class MachinesPage {
	private state : string;

	constructor(public navCtrl: NavController, navParams: NavParams) {
		this.state = navParams.data.state;
	}

	doRefresh(refresher) {
	    console.log('Begin async operation', refresher);

	    setTimeout(() => {
	      console.log('Async operation has ended');
	      refresher.complete();
	    }, 2000);
	}

	showMachine(){
		this.navCtrl.push(MachineDetailPage,{machineId:'m1'})
	}
}