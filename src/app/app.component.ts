import { Component } from '@angular/core';
import { Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { LoopBackConfig } from './shared/sdk';
import { TranslateService } from '@ngx-translate/core';

declare var window: any;
declare var document: any;
declare var require: any;
var config = require('../../config.json');

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  //rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, toastCtrl: ToastController, translate: TranslateService) {
    LoopBackConfig.setBaseURL(config.cloud.baseUrl);
    LoopBackConfig.setApiVersion('api');
    if (config.productionMode) {
      LoopBackConfig.setDebugMode(false);
    }

    translate.setDefaultLang('zh');
    //TODO: use system default language
    translate.use('zh');
    console.log(translate.getBrowserLang());

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      splashScreen.hide();

      function log(msg){
        console.log(JSON.stringify(msg));
      }

      document.addEventListener('chcp_updateIsReadyToInstall', eventData => log(Object.assign({event:'chcp_updateIsReadyToInstall'},eventData)), false);
      document.addEventListener('chcp_updateLoadFailed', eventData => log(Object.assign({event:'chcp_updateLoadFailed'},eventData)), false);
      document.addEventListener('chcp_nothingToUpdate', eventData => log(Object.assign({event:'chcp_nothingToUpdate'},eventData)), false);
      document.addEventListener('chcp_beforeInstall', eventData => log(Object.assign({event:'chcp_beforeInstall'},eventData)), false);
      document.addEventListener('chcp_updateInstalled', eventData => log(Object.assign({event:'chcp_updateInstalled'},eventData)), false);
      document.addEventListener('chcp_updateInstallFailed', eventData => log(Object.assign({event:'chcp_updateInstallFailed'},eventData)), false);
      document.addEventListener('chcp_nothingToInstall', eventData => log(Object.assign({event:'chcp_nothingToInstall'},eventData)), false);
      document.addEventListener('chcp_beforeAssetsInstalledOnExternalStorage', eventData => log(Object.assign({event:'chcp_beforeAssetsInstalledOnExternalStorage'},eventData)), false);
      document.addEventListener('chcp_assetsInstalledOnExternalStorage', eventData => log(Object.assign({event:'chcp_assetsInstalledOnExternalStorage'},eventData)), false);
      document.addEventListener('chcp_assetsInstallationError', eventData => log(Object.assign({event:'chcp_assetsInstallationError'},eventData)), false);
     
      if (window.baiduPush) {
        window.baiduPush.onMessage(result => log(result), error => log(error));

        window.baiduPush.onNotificationClicked(result => log(result), error => log(error));

        window.baiduPush.onNotificationArrived(result => log(result), error => log(error));

        window.baiduPush.startWork(config.baiduPush.api_key, result => log(result));
      }      

    });
  }
}
