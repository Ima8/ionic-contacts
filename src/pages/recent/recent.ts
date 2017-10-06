import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactDataProvider, ContactCall } from '../../providers/contact-data/contact-data'

/**
 * Generated class for the RecentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html',
})
export class RecentPage {
  contactRecentLists: Array<ContactCall> = [];

  constructor(public contactData: ContactDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.contactRecentLists = this.contactData.getRecentCalls()

  }
  convertTime(contactCall:ContactCall){
    var localeSpecificTime = contactCall.callingtime.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentPage');
  }

}
