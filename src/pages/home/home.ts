import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MachinesPage } from '../machines/machines';
import { BatchesPage } from '../batches/batches';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {
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

}
