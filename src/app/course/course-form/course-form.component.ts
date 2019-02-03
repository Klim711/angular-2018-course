import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/listing/services/courses.service';
import { Course } from 'src/app/shared/interfaces/course.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  private originalCourse: Course = null;
  public title: string = '';
  public description: string = '';
  public date: string = '';
  public duration: string = '';

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

  setFormFields(course: Course) {
    this.title = course.title;
    this.description = course.description;
    this.date = moment(course.create_date).format('YYYY-MM-DD');
    this.duration = String(course.duration);
  }

  save() {
    const content = {
      title: this.title,
      description: this.description,
      create_date: new Date(this.date),
      duration: this.duration,
    };
    if (this.originalCourse) {
      this.coursesService.editCourseItem(this.originalCourse.id, content);
    } else {
      this.coursesService.createCourseItem(content);

      this.originalCourse = null;
      this.resetForm();
    }
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
