import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';

import * as moment from 'moment';

import { CoursesService } from 'src/app/listing/services/courses.service';
import { Course } from 'src/app/shared/interfaces/course.interface';
import { AddCourse } from '../store/course-page.actions';
import { State } from '../store/course-page.reducers';
import { dateFormatValidator } from '../directives/date-format.directive';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  private originalCourse: Course = null;
  public course = this.formBuilder.group({
    name: ['', [Validators.maxLength(50), Validators.required]],
    description: ['', [Validators.maxLength(500)]],
    date: ['', [Validators.required, dateFormatValidator]],
    length: ['', [Validators.required]],
    authors: [[]],
  });

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        this.coursesService.getCourseItem(Number(data.id))
          .subscribe((course: Course) => {
            this.originalCourse = course;

            this.setFormFields(course);
          });
      } else {
        this.originalCourse = null;

        this.resetForm();
      }
    });
  }

  setFormFields(course: Course) {
    this.course.setValue({
      name: course.name,
      description: course.description,
      date: moment(course.date).format('DD-MM-YYYY'),
      length: String(course.length),
      authors: [],
    });
  }

  save() {
    const content = this.course.value;
    content.date = new Date(content.date);

    if (this.originalCourse) {
      this.coursesService.editCourseItem(this.originalCourse.id, content)
        .subscribe(() => {
          this.router.navigate(['/listing']);
        });
    } else {
      this.store.dispatch(new AddCourse(content));
    }
  }

  cancel() {
    this.router.navigate(['/listing']);
  }

  resetForm() {
    this.course.setValue({
      name: '',
      description: '',
      date: '',
      length: '',
      authors: [],
    });
  }
}
