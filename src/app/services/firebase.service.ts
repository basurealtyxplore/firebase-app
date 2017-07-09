import { Injectable } from '@angular/core';
/* Database, List-Observable, Object-Observable */
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
/* import Firebase globally */
import * as firebase from 'firebase';

/* Event Observables */
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class FirebaseService {

  contacts: FirebaseListObservable<any[]>;
  contact: any;
  blogs: FirebaseListObservable<any[]>;
  blog: any;


  constructor(private af: AngularFireDatabase) {
    this.contacts = this.af.list('/contact') as FirebaseListObservable<Contact[]>
    this.blogs = this.af.list('/blog') as FirebaseListObservable<Blog[]>
  }
  addContact(contact) {
    this.contacts.push(contact);
  }
  getContact() {
    return this.contacts;
  }

  addBlog(blog) {
    this.blogs.push(blog);
  }
  getBlog() {
    return this.blogs;
  }
}

/* Data Model of DB */

interface Contact {
  $key?: string;
  name?: string;
  mobile?: string;
  email?: string;
  message?: string;
}

interface Blog {
  $key?: string;
  title?: string;
  body?: string;
  categoryId?: string;
  categoryName: string;
  dateTime: string;
}
