import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { DTRService } from '../../app/dtr.service';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  myParam: string;

  constructor(
    private viewCtrl: ViewController,
    private dtr: DTRService,
    params: NavParams
  ) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  login(){
    this.dtr.login({"email": "dtr@ugen.cn","password":"123456"});
    this.viewCtrl.dismiss();
  }
}