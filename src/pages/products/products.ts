import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailPage } from '../products/productDetail';

declare var require: any;
var allProducts = require('./allProducts.json');


@Component({
	selector: 'page-products',
    templateUrl: 'products.html'
})
export class ProductsPage {
	private category: string;

	public machines = allProducts.filter((product)=>{ return product.category == 'machines' });
	public equipments = allProducts.filter((product)=>{ return product.category == 'equipments' });
	public networks = allProducts.filter((product)=>{ return product.category == 'networks' });
	public parts = allProducts.filter((product)=>{ return product.category == 'parts' });

	constructor(public navCtrl: NavController) {
		this.category = 'machines';
	}

	public showProduct(product){
		this.navCtrl.push(ProductDetailPage,{product:product})
	}
}