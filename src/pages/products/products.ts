import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailPage } from '../products/productDetail';



@Component({
	selector: 'page-products',
    templateUrl: 'products.html'
})
export class ProductsPage {
	private category: string;

	constructor(public navCtrl: NavController) {
		this.category = 'machine';
	}

	showProduct(){
		this.navCtrl.push(ProductDetailPage,{name:'unknown'})
	}
}