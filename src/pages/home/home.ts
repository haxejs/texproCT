import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MachinesPage } from '../machines/machines';
import { BatchesPage } from '../batches/batches';
import { RequestPage } from '../modals/request';
import { LoginPage } from '../modals/login';

import { DTRService } from '../../app/dtr.service';
import { Batch, Machine } from '../../app/shared/sdk/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public machines:Array<Machine> = new Array<Machine>();
  public batches:Array<Batch> = new Array<Batch>();

  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private dtr: DTRService) {
      this.machines = dtr.machines;
      this.batches = dtr.batches;
  }

  public runningMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 1 && machine.MachineState == '1'});
  }

  public warningMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 1 && machine.Main_Alarm > 0});
  }

  public stoppedMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 1 && machine.MachineState == '0'});
  }

  public offlineMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 0});
  }

  public completedBatches(){
    return this.batches.filter(batch => {return batch.completed == 1});
  }

  public uncompletedBatches(){
    return this.batches.filter(batch => {return batch.completed == 0});
  }

  public completedLoading(){
    return this.completedBatches().reduce((sum,batch)=>{return sum + batch.Loading },0);
  }

  public uncompletedLoading(){
    return this.uncompletedBatches().reduce((sum,batch)=>{return sum + batch.Loading },0);
  }

  public showMachines(state) {
    if (this.dtr.isAuthenticated()){
      this.navCtrl.push(MachinesPage,{state:state});
    } else {
      this.login();
    }    
  }

  public showBatches(state) {
    if (this.dtr.isAuthenticated()){
      this.navCtrl.push(BatchesPage,{state:state});
    } else {
      this.login();
    }    
  }

  public requestRepair() {
    if (this.dtr.isAuthenticated()){
      let myModal = this.modalCtrl.create(RequestPage);
      myModal.present();
    } else {
      this.login();
    }    
  }

  public login() {
    let myModal = this.modalCtrl.create(LoginPage);
    myModal.present();
  }

}
