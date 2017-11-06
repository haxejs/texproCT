import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatchDetailPage } from '../batches/batchDetail';



@Component({
	selector: 'page-batches',
    templateUrl: 'batches.html'
})
export class BatchesPage {
	constructor(public navCtrl: NavController) {}

	showBatch(){
		this.navCtrl.push(BatchDetailPage,{name:'unknown'})
	}
}