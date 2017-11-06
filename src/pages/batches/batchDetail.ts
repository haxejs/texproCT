import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-batchDetail',
    templateUrl: 'batchDetail.html'
})
export class BatchDetailPage {
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  	console.dir(navParams);
  }
}