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
  public batches:Array<Batch> = new Array<Machine>();

  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private dtr: DTRService) {
      this.machines = dtr.machines;
      this.batches = dtr.batches;
  }

  public runningMachines(){
    return this.machines.filter(machine => {return machine.MachineNumber == 10});
  }

  public warningMachines(){
    return this.machines.filter(machine => {return machine.MachineNumber == 11});
  }

  public stoppedMachines(){
    return this.machines.filter(machine => {return machine.MachineNumber == 12});
  }

  public disconnectedMachines(){
    return this.machines.filter(machine => {return machine.MachineNumber == 13});
  }

  public completedBatches(){
    return this.batches.filter(batch => {return batch.MachineNumber == 10});
  }

  public uncompletedBatches(){
    return this.batches.filter(batch => {return batch.MachineNumber == 11});
  }

  public completedLoading(){
    return this.completedBatches().reduce((sum,batch)=>{return sum + batch.Loading },0);
  }

  public uncompletedLoading(){
    return this.uncompletedBatches().reduce((sum,batch)=>{return sum + batch.Loading },0);
  }

  public showMachines() {
    if (this.dtr.isAuthenticated()){
      this.navCtrl.push(MachinesPage,{state:"stopped"});
    } else {
      this.login();
    }    
  }

  public showBatches() {
    if (this.dtr.isAuthenticated()){
      this.navCtrl.push(BatchesPage,{state:"completed"});
    } else {
      this.login();
    }    
  }

  public requestRepair() {
    if (this.dtr.isAuthenticated()){
      let myModal = this.modalCtrl.create(RequestPage, { myParam: 'unknown' });
      myModal.present();
    } else {
      this.login();
    }    
  }

  public login() {
    let myModal = this.modalCtrl.create(LoginPage, { myParam: 'username' });
    myModal.present();
  }

}
