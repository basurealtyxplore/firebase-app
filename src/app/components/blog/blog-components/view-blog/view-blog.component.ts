import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../services/firebase.service';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
  providers: [FirebaseService]
})
export class ViewBlogComponent implements OnInit {

  blogs:any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getBlog().subscribe(blog => {
      this.blogs = blog;
    });
  }

}
