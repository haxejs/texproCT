import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-machineDetail',
    templateUrl: 'machineDetail.html'
})
export class MachineDetailPage {
	private MachineIns1_Text: string;
	private MachineIns1_Value: string;

	constructor(private navCtrl: NavController, private navParams: NavParams) {
	  	this.MachineIns1_Text = 'Increase Temp';
	  	this.MachineIns1_Value = '80';
	}

	doRefresh(refresher) {
	    console.log('Begin async operation', refresher);

	    setTimeout(() => {
	      console.log('Async operation has ended');
	      refresher.complete();
	    }, 2000);
	}  
}