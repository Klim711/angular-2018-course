import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addCourse() {
    this.router.navigate(['/course']);
  }

}
