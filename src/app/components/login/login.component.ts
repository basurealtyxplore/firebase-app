import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>

  constructor(

  	public afAuth: AngularFireAuth,
  	public flashMessage: FlashMessagesService,
  	private router: Router

  	) {
  	this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  login() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		this.router.navigate(['/dashboard']);
	}
  // login() {
  //   this.afAuth.auth.login();
	// 	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	// 	this.router.navigate(['/dashboard']);
	// }


}
