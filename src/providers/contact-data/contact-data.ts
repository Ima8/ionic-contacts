import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
/*
  Generated class for the ContactDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactDataProvider {

  recentCalls: Array<ContactCall> = [];
  constructor(public http: Http) {
    console.log('Hello ContactDataProvider Provider');
  }

  loadContacts(): Observable<Contact[]> {
    const pathAPIParks = "http://web.sit.kmutt.ac.th/sanit/int493/contacts.php"
    return this.http.get(pathAPIParks).map(res => res.json().contacts)
  }

  getRecentCalls(): ContactCall[] {
    return this.recentCalls
  }

  addRecentCall(newContactCall: ContactCall) {
    this.recentCalls.unshift(newContactCall)
    console.log("this.recent");
    console.log(this.recentCalls);
  }
  getPathPic(firstName) {
    return "http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/" + firstName.toLowerCase() + ".jpeg"
  }
}

export class Contact {
  prefix: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
}

export class ContactCall {
  prefix: string;
  firstname: string;
  lastname: string;
  phone: number;
  callingtime: Date;
}
