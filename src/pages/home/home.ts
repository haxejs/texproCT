import { Component, OnDestroy } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MachinesPage } from '../machines/machines';
import { BatchesPage } from '../batches/batches';
//import { RequestPage } from '../modals/request';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../modals/login';

import { DTRService } from '../../app/dtr.service';
import { Batch, Machine } from '../../app/shared/sdk/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {
  private machines:Array<Machine> = new Array<Machine>();
  private batches:Array<Batch> = new Array<Batch>();
  private machinesSubscription;
  private batchesSubscription;
  public runningMachines:Array<Machine> = new Array<Machine>();
  public warningMachines:Array<Machine> = new Array<Machine>();
  public stoppedMachines:Array<Machine> = new Array<Machine>();
  public offlineMachines:Array<Machine> = new Array<Machine>();
  public completedBatches:Array<Batch> = new Array<Batch>();
  public uncompletedBatches:Array<Batch> = new Array<Batch>();
  public completedLoading:number = 0;
  public uncompletedLoading:number = 0;
  


  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private dtr: DTRService) {
      this.machinesSubscription = dtr.machinesObservable.subscribe(machines => {
        this.machines = machines;
        this.machinesUpdate();
      });
      this.batchesSubscription = dtr.batchesObservable.subscribe(batches => {
        this.batches = batches;
        this.batchesUpdate();
      });
  }

  ngOnDestroy(){
    this.machinesSubscription.unsubscribe();
    this.batchesSubscription.unsubscribe();
  }

  private machinesUpdate(){
    this.runningMachines = this.calRunningMachines();
    this.warningMachines = this.calWarningMachines();
    this.stoppedMachines = this.calStoppedMachines();
    this.offlineMachines = this.calOfflineMachines();
  }

  private batchesUpdate(){
    this.completedBatches = this.calCompletedBatches();
    this.uncompletedBatches = this.calUncompletedBatches();
    this.completedLoading = this.calCompletedLoading();
    this.uncompletedLoading = this.calUncompletedLoading();
  }

  private calRunningMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 1 && machine.MachineStateInt == 1});
  }

  private calWarningMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 1 && machine.Main_AlarmInt > 0});
  }

  private calStoppedMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 1 && machine.MachineStateInt == 0});
  }

  private calOfflineMachines(){
    return this.machines.filter(machine => {return machine.OnLine == 0});
  }

  private calCompletedBatches(){
    return this.batches.filter(batch => {return batch.completed == 1});
  }

  private calUncompletedBatches(){
    return this.batches.filter(batch => {return batch.completed == 0});
  }

  private calCompletedLoading(){
    return this.completedBatches.reduce((sum,batch)=>{return sum + batch.Loading },0);
  }

  private calUncompletedLoading(){
    return this.uncompletedBatches.reduce((sum,batch)=>{return sum + batch.Loading },0);
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
      // let myModal = this.modalCtrl.create(RequestPage);
      // myModal.present();
      this.navCtrl.push(ContactPage);
    } else {
      this.login();
    }    
  }

  public login() {
    let myModal = this.modalCtrl.create(LoginPage);
    myModal.present();
  }

}
