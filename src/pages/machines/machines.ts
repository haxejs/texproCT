import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineDetailPage } from '../machines/machineDetail';

const stateIconMap = {
	'running':'pulse',
	'warning':'warning',
	'stopped':'square',
	'disconnected':'switch'
};

@Component({
	selector: 'page-machines',
    templateUrl: 'machines.html'
})
export class MachinesPage {
	private state : string;
	private total : number = 0;
	private iconName : string;

	constructor(public navCtrl: NavController, navParams: NavParams) {
		this.state = navParams.data.state;
		this.iconName = stateIconMap[navParams.data.state];
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