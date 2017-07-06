import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }
//   toggleState(){
//       $('html').removeClass('nav-open');
//       if ($('nav').hasClass('navbar-absolute')) {
//           $('html').removeClass('nav-open-absolute')
//       }
//       materialKit.misc.navbar_menu_visible = 0;
//       $('#bodyClick').remove();
//       setTimeout(function() {
//           $toggle.removeClass('toggled')
//       }, 550)
// }

    // toggleState(event) {
    //     event.target.classList.remove('nav-open');
    //     //$(toggle) = event.target.classList(".navbar-toggle");
    // }
}
