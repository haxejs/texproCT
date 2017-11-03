import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailPage } from '../products/productDetail';



@Component({
	selector: 'page-products',
    templateUrl: 'products.html'
})
export class ProductsPage {
	constructor(public navCtrl: NavController) {}

	showProduct(){
		this.navCtrl.push(ProductDetailPage,{name:'unknown'})
	}
}