import { Injectable } from '@angular/core';
/* import Firebase globally */
import * as firebase from 'firebase';
/* Database, List-Observable, Object-Observable */
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

/* Event Observables */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class FirebaseService {

    contacts: FirebaseListObservable<any[]>;
    contact:any;


  constructor(private af: AngularFireDatabase) {
    this.contacts = this.af.list('/contact') as FirebaseListObservable<Contact[]>
  }
  addContact(contact){
    this.contacts.push(contact);
  }
  getContact(){
    return this.contacts;
  }
}
interface Contact{
    $key?:string;
    name?:string;
    mobile?:string;
    email?:string;
    message?:string;
}
