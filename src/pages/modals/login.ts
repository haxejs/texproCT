import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { DTRService } from '../../app/dtr.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  public email:string = "dtr@ugen.cn";
  public password:string = "123456";
  public texts: any = {};
  private subscription;
  constructor(
    private viewCtrl: ViewController,
    private dtr: DTRService,
    private toastCtrl: ToastController,
    private translate: TranslateService
  ) {
    this.subscription = this.translate.stream(['LOGIN_FAILED']).subscribe(texts => this.texts = texts);
  }

  dismiss() {
    this.subscription.unsubscribe();
    this.viewCtrl.dismiss();
  }

  login(){
    this.dtr.login({"email": this.email,"password":this.password},(err)=>{
      this.toastCtrl.create({
        message: this.texts.LOGIN_FAILED,
        duration: 3000,
        position: 'bottom'
      }).present();
    });
    this.dismiss();
  }
}