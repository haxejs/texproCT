import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailPage } from '../pages/products/productDetail';
import { MachinesPage } from '../pages/machines/machines';
import { MachineDetailPage } from '../pages/machines/machineDetail';
import { BatchesPage } from '../pages/batches/batches';

import { RequestPage } from '../pages/modals/request';
import { LoginPage } from '../pages/modals/login';

import { CarouselComponent } from '../pages/home/carousel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SDKBrowserModule } from './shared/sdk/index';

import { DTRService } from './dtr.service';

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    IntroPage,
    ProductsPage,
    ProductDetailPage,
    MachinesPage,
    MachineDetailPage,
    BatchesPage,
    TabsPage,
    LoginPage,
    RequestPage,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    SDKBrowserModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp,{
      backButtonIcon: 'md-arrow-back',
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    IntroPage,
    ProductsPage,
    ProductDetailPage,
    MachinesPage,
    MachineDetailPage,
    BatchesPage,
    LoginPage,
    RequestPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DTRService,
    TranslateService, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
