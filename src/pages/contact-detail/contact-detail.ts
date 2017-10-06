import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactDataProvider, Contact } from '../../providers/contact-data/contact-data'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {

  contact: Contact

  constructor(
    private alertCtrl: AlertController,
    public contactData: ContactDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.contact = navParams.data
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }
  getPathPic(firstName) {
    return this.contactData.getPathPic(firstName)
  }
  confirmCallPhone(contact) {
    let alert = this.alertCtrl.create({
      title: 'Call?',
      message: `${contact.firstname} ${contact.phone}`,
      buttons: [
        {
          text: 'Call',
          handler: () => {
            this.callPhone(contact)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }

      ]
    });
    alert.present();
  }
  callPhone(contact: Contact) {
    console.log(contact);
    let newContactCall = {
      prefix: contact.prefix || "",
      firstname: contact.firstname,
      lastname: contact.lastname,
      phone: contact.phone,
      callingtime: new Date()
    }
    this.contactData.addRecentCall(newContactCall)
    this.navCtrl.pop()
  }
}
