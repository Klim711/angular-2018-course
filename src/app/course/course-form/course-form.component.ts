import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  public title: String = '';
  public description: String = '';
  public date: String = '';
  public duration: String = '';

  constructor() { }

  ngOnInit() {
  }

  save() {
    alert(`
      Following course was saved:
      Title: ${this.title}
      Description: ${this.description}
      Date: ${this.date}
      Duration: ${this.duration}
    `);
  }

  cancel() {
    this.title = '';
    this.description = '';
    this.date = '';
    this.duration = '';
  }
}
