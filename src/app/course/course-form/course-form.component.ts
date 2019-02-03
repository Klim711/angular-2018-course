import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/listing/services/courses.service';
import { CoursesListItem } from 'src/app/listing/courses-list-item.model';
import * as moment from 'moment';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  private originalCourse: CoursesListItem = null;
  public title: String = '';
  public description: String = '';
  public date: String = '';
  public duration: String = '';

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        const courseItem = this.coursesService.getCourseItem(Number(data.id));
        this.originalCourse = courseItem;

        this.setFormFields(courseItem);
      } else {
        this.originalCourse = null;

        this.resetForm();
      }
    });
  }

  setFormFields(course: CoursesListItem) {
    this.title = course.title;
    this.description = course.description;
    this.date = moment(course.create_date).format('YYYY-MM-DD');
    this.duration = String(course.duration);
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
    if (this.originalCourse) {
      this.setFormFields(this.originalCourse);
    } else {
      this.resetForm();
    }
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.date = '';
    this.duration = '';
  }
}
