import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public name: string = '';
  public description: string = '';
  public date: string = '';
  public length: string = '';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
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
    this.name = course.name;
    this.description = course.description;
    this.date = moment(course.date).format('YYYY-MM-DD');
    this.length = String(course.length);
  }

  save() {
    const content = {
      name: this.name,
      description: this.description,
      date: new Date(this.date),
      length: this.length,
    };
    if (this.originalCourse) {
      this.coursesService.editCourseItem(this.originalCourse.id, content);
    } else {
      this.coursesService.createCourseItem(content).subscribe(() => {
        this.router.navigate(['/listing']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listing']);
  }

  resetForm() {
    this.name = '';
    this.description = '';
    this.date = '';
    this.length = '';
  }
}
