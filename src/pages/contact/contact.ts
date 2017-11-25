import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var require: any;
var allOffices = require('./offices.json');

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private offices = allOffices;

  constructor(public navCtrl: NavController) {
  }
}
