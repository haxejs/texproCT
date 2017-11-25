import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineDetailPage } from '../machines/machineDetail';
import { DTRService } from '../../app/dtr.service';
//import { Machine } from '../../app/shared/sdk/models';


@Component({
	selector: 'page-machines',
    templateUrl: 'machines.html'
})
export class MachinesPage {
	private state : string;//running,stopped,warning,offline

	constructor(public navCtrl: NavController, private dtr: DTRService, navParams: NavParams) {
		this.state = navParams.data.state;
	}

	public machines(){
		if (this.state == 'stopped'){
			return this.dtr.machines.filter(machine => {return machine.OnLine == 1 && machine.MachineState == '0'});	
		}else if (this.state == 'running'){
			return this.dtr.machines.filter(machine => {return machine.OnLine == 1 && machine.MachineState == '1'});
		}else if (this.state == 'warning'){
			return this.dtr.machines.filter(machine => {return machine.OnLine == 1 && machine.Main_Alarm > 0});
		}else {
			return this.dtr.machines.filter(machine => {return machine.OnLine == 0});
		}		
	}

	public showMachine(machineId){
		this.navCtrl.push(MachineDetailPage,{machineId:machineId});
	}
}