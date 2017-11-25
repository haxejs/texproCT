import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

declare var require: any;
var config = require('../../config.json');

if (config.productionMode) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
