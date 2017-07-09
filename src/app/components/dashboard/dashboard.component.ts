import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

// import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [FirebaseService]
})
export class DashboardComponent implements OnInit {

  user: Observable<firebase.User>
  contacts: any;

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth,
    // public flashMessage: FlashMessagesService,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.firebaseService.getContact().subscribe(contact => {
      this.contacts = contact;
    });
  }


  logout() {
    this.afAuth.auth.signOut();
    // this.flashMessage.show('You are logged out',
    //   {
    //     cssClass: 'alert-success',
    //     timeout: 3000
    //   });
    this.router.navigate(['/']);
  }
  addNewBlog() {
    this.router.navigate(['/blog']);
  }

}
