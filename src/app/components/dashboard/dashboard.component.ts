import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../services/schools.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  schools:any;

  constructor(private schoolService: SchoolsService) { }

  ngOnInit() {
    this.schoolService.getData().subscribe(school => {
      this.schools = school;
    });
  }

}
