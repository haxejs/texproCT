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
  private descriptionHTML: any;
  private product:any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private http: Http) {
  	this.product = navParams.data.product;

  	this.http.get(this.product.htmlPath)
	  .map(response => response.text())
	  .subscribe(html => this.descriptionHTML = html);
  }
}