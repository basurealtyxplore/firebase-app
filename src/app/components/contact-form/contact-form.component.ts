import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [FirebaseService, FlashMessagesService]
})
export class ContactFormComponent implements OnInit {
  name:any;
  mobile:any;
  email:any;
  message:any;

  constructor(
    private firebaseService: FirebaseService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm){
    let contact={
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      message: this.message
    }
   this.firebaseService.addContact(contact);
   myForm.reset();
   this.flashMessage.show("Thanks for sending message! We will get back to you soon...", { cssClass: 'alert-success', timeout: 5000 });
  }
}
