import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var require: any;
var myPackage = require('../../../package.json');


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private language:string;

  private version:string;

  constructor(public navCtrl: NavController) {
  	this.language = 'en';
  	this.version = myPackage.version;
  }

}
