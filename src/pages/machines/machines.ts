import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MachineDetailPage } from '../machines/machineDetail';
import { DTRService } from '../../app/dtr.service';
import { Machine } from '../../app/shared/sdk/models';


@Component({
	selector: 'page-machines',
    templateUrl: 'machines.html'
})
export class MachinesPage implements OnDestroy{
	private state : string;//running,stopped,warning,offline
	private machinesSubscription;
	public machines:Array<Machine> = new Array<Machine>();

	constructor(public navCtrl: NavController, private dtr: DTRService, navParams: NavParams) {
		this.state = navParams.data.state;
		this.machinesSubscription = dtr.machinesObservable.subscribe(machines => this.machines = this.filterMachines(machines));
	}

	ngOnDestroy(){
		this.machinesSubscription.unsubscribe();
	}

	private filterMachines(oldMachines:Machine[]){
		if (this.state == 'stopped'){
			return oldMachines.filter(machine => {return machine.OnLine == 1 && machine.MachineState == '0'});	
		}else if (this.state == 'running'){
			return oldMachines.filter(machine => {return machine.OnLine == 1 && machine.MachineState == '1'});
		}else if (this.state == 'warning'){
			return oldMachines.filter(machine => {return machine.OnLine == 1 && machine.Main_Alarm > 0});
		}else {
			return oldMachines.filter(machine => {return machine.OnLine == 0});
		}		
	}

	public showMachine(machineId){
		this.navCtrl.push(MachineDetailPage,{machineId:machineId});
	}
}