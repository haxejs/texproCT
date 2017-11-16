import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineDetailPage } from '../machines/machineDetail';
import { DTRService } from '../../app/dtr.service';
import { Machine } from '../../app/shared/sdk/models';

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

	constructor(public navCtrl: NavController, private dtr: DTRService, navParams: NavParams) {
		this.state = navParams.data.state;
		this.iconName = stateIconMap[navParams.data.state];
	}

	public machines(){
		//TODO:filter by state
		return this.dtr.machines.filter(machine => {return machine.MachineNumber == 10});
	}

	public showMachine(machineId){
		this.navCtrl.push(MachineDetailPage,{machineId:machineId});
	}
}