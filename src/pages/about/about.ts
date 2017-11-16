import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { LoginPage } from '../modals/login';
import { DTRService } from '../../app/dtr.service';

declare var require: any;
var myPackage = require('../../../package.json');


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private language:string;

  private version:string;

  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    private dtr: DTRService) {
  	this.language = 'en';
  	this.version = myPackage.version;
  }

  login() {
    let myModal = this.modalCtrl.create(LoginPage, { myParam: 'username' });
    myModal.present();
  }

  logout() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure to logout?',
      buttons: [
        {
          text: 'Sure',
          handler: () => {
            this.dtr.logout();
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
