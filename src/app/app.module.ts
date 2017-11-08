import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

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
import { XChartComponent } from '../pages/machines/xchart';
import { BatchesPage } from '../pages/batches/batches';
import { BatchDetailPage } from '../pages/batches/batchDetail';

import { CarouselComponent } from '../pages/home/carousel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


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
    XChartComponent,
    BatchesPage,
    BatchDetailPage,
    TabsPage,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
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
    BatchDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
