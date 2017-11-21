import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { LoginPage } from '../modals/login';
import { DTRService } from '../../app/dtr.service';
import { TranslateService } from '@ngx-translate/core';

declare var require: any;
var myPackage = require('../../../package.json');


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public language:string;

  public version:string;

  public texts: any = {};

  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    private dtr: DTRService,
    private translate: TranslateService) {
  	this.language = translate.currentLang;
  	this.version = myPackage.version;
    this.translate.get(['Sure', 'Cancel', 'LOGOUT_ALERT_TITLE'])
    .subscribe(texts => this.texts = texts);
  }

  public onChange(lang){
    this.translate.use(lang);
  }

  public login() {
    let myModal = this.modalCtrl.create(LoginPage);
    myModal.present();
  }

  public logout() {
    let confirm = this.alertCtrl.create({
      title: this.texts.LOGOUT_ALERT_TITLE,
      buttons: [
        {
          text: this.texts.Sure,
          handler: () => {
            this.dtr.logout();
          }
        },
        {
          text: this.texts.Cancel,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
