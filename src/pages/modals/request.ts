import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'request.html'
})
export class RequestPage {

  constructor(
    private viewCtrl: ViewController,
    params: NavParams
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}