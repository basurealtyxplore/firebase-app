import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  providers: [FirebaseService, FlashMessagesService]
})
export class AddBlogComponent implements OnInit {

  title:any;
  body:any;
  categoryName:any;

  constructor(
    private firebaseService: FirebaseService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm){
    let blog={
      title: this.title,
      body: this.body,
      categoryName: this.categoryName
    }
   this.firebaseService.addBlog(blog);
   myForm.reset();
   this.flashMessage.show("Thanks for adding a Blog...", { cssClass: 'alert-success', timeout: 5000 });
  }

}
