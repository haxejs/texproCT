import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DTRService } from '../../app/dtr.service';
import { Machine } from '../../app/shared/sdk/models';


@Component({
	selector: 'page-machineDetail',
    templateUrl: 'machineDetail.html'
})
export class MachineDetailPage {
	private MachineIns1_Text: string;
	private MachineIns1_Value: string;

	constructor(private navCtrl: NavController, private navParams: NavParams, private dtr: DTRService) {
	  	this.MachineIns1_Text = 'Increase Temp';
	  	this.MachineIns1_Value = '80';
	}

	public machine(){
		let machine = this.dtr.machines.find( (machine) => { return machine.id == this.navParams.data.machineId});
		return machine?machine:{};
	}
}