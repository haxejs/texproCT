import { Component, OnDestroy } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnDestroy{

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor() {
  }

  ngOnDestroy(){
  }
}
