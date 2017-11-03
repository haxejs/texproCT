import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-productDetail',
    templateUrl: 'productDetail.html'
})
export class ProductDetailPage {
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  	console.dir(navParams);
  }
}