import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactDataProvider, Contact } from '../../providers/contact-data/contact-data'
import { ContactDetailPage } from '../contact-detail/contact-detail'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactLists: Array<Contact> = [];

  constructor(
    public contactData: ContactDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.contactData.loadContacts()
      .subscribe(data => { // success
        this.contactLists = data;
      },
      error => { // error
        console.log("error is " + error)
      },
      () => { // complete
        console.log('read Contact Complete ' + this.contactLists)
      }
      );
  }

  getPathPic(firstName) {
    return this.contactData.getPathPic(firstName)
  }
  getDetailPage(contact:Contact){
    this.navCtrl.push(ContactDetailPage,contact)
  }

}
