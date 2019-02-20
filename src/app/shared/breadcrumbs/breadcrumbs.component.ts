import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/listing/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public isCoursePage: boolean;
  public content: string = '';

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.route.url.subscribe(([segment]) => {
      this.isCoursePage = segment.path === 'course';
    });

    this.route.params.subscribe((data) => {
      if (data.id) {
        this.coursesService.getCourseItem(Number(data.id))
          .subscribe((course) => {
            this.content = `${course.name}`;
          });
      } else {
        this.content = 'New Course'
      }
    });
  }

}
