import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-machineDetail',
    templateUrl: 'machineDetail.html'
})
export class MachineDetailPage {
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  	console.dir(navParams);
  }
}