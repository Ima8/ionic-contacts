import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { RecentPage } from '../recent/recent'
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  tab1Root = ContactPage;
  tab2Root = RecentPage;
  constructor() {

  }
}
