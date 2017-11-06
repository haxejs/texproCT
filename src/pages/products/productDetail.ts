import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
// import { Observable } from "rxjs/Observable";
// import { Subject } from "rxjs/Subject";
// import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/map';


@Component({
	selector: 'page-productDetail',
    templateUrl: 'productDetail.html'
})
export class ProductDetailPage {
  descriptionHTML: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private http: Http) {
  	console.dir(navParams);

  	this.http.get('assets/products/ash_plus.html')
	  .map(response => response.text())
	  .subscribe(html => this.descriptionHTML = html);
  }
}