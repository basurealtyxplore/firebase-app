import { Injectable } from '@angular/core';
/* import Firebase globally */
import * as firebase from 'firebase';
/* Database, List-Observable, Object-Observable */
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

/* Event Observables */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class FirebaseService {

    contacts: FirebaseListObservable<any[]>;
    //contact: FirebaseObjectObservable<any[]>;
    contact:any;


  constructor(private af: AngularFireDatabase) {
    this.contacts = this.af.list('/contact') as FirebaseListObservable<Contact[]>
    //const contacts = this.af.object('/contact');

  }
  addContact(contact){
//    return this.contacts.push(contact);
    //firebase.database().ref('add').push(this.contact);
    //this.contact.push(contacts);

    /* this.contact.set(contacts); */
    //this.contact.set({ name: 'new name!'});

    this.contacts.push(contact);
    //this.contact = '';

    // let storageRef = firebase.storage().ref();
    // for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
    //   let path = `/${this.folder}/${selectedFile.name}`;
    //   let iRef = storageRef.child(path);
    //   iRef.put(selectedFile).then((snapshot) => {
    //     contact.image = selectedFile.name;
    //     contact.path = path;
    //     return this.contacts.push(contact);
    //   });
    // }

  }
}
interface Contact{
    $key?:string;
    name?:string;
    mobile?:string;
    email?:string;
    message?:string;
}
