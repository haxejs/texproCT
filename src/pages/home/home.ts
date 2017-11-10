import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MachinesPage } from '../machines/machines';
import { BatchesPage } from '../batches/batches';
import { RequestPage } from '../modals/request';
import { LoginPage } from '../modals/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  showMachines() {
    this.navCtrl.push(MachinesPage,{state:"stopped",total:7});
  }

  showBatches() {
    this.navCtrl.push(BatchesPage,{});
  }

  requestRepair() {
    let myModal = this.modalCtrl.create(RequestPage, { myParam: 'unknown' });
    myModal.present();
  }

  login() {
    let myModal = this.modalCtrl.create(LoginPage, { myParam: 'username' });
    myModal.present();
  }

}
