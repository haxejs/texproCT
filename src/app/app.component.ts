import { Component } from '@angular/core';
import { Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { LoopBackConfig } from './shared/sdk';
import { TranslateService } from '@ngx-translate/core';

declare var window: any;
var api_key = 's7dXctRdiXVRtc8PF2PKWjUk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  //rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, toastCtrl: ToastController, translate: TranslateService) {
    LoopBackConfig.setBaseURL('http://192.168.2.104:3000');
    LoopBackConfig.setApiVersion('api');

    translate.setDefaultLang('zh');
    //TODO: use system default language
    translate.use('zh');
    console.log(translate.getBrowserLang());

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      function showToast(msg){
        toastCtrl.create({
          message: JSON.stringify(msg),
          duration: 3000,
          position: 'top'
        }).present();
      }
     
      if (window.baiduPush) {
        window.baiduPush.onMessage(result => showToast({msg:result}), error => showToast(error));

        window.baiduPush.onNotificationClicked(result => showToast(result), error => showToast(error));

        window.baiduPush.onNotificationArrived(result => showToast(result), error => showToast(error));

        window.baiduPush.startWork(api_key, result => {}, error => showToast(error));
      }      

    });
  }
}
