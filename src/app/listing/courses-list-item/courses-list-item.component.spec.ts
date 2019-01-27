import { CoursesListItem } from './../courses-list-item.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { CourseClassPipe } from '../pipes/course-class.pipe';
import { CourseDurationPipe } from '../../shared/pipes/course-duration.pipe';
import { DatePipe } from '@angular/common';

@Component({
  template: `<app-courses-list-item [courseItem]="course"></app-courses-list-item>`
})
class TestHostComponent {
  public course: CoursesListItem = {
    id: 1,
    title: 'some title',
    create_date: new Date('1/1/2011'),
    duration: 123,
    description: 'AAA',
    rating: 123,
  };
}
describe('CoursesListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let course: CoursesListItem;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListItemComponent,
        TestHostComponent,
        CourseClassPipe,
        CourseDurationPipe,
      ],
      providers: [CoursesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
    course = testHost.course;
    coursesService = TestBed.get(CoursesService);
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  describe('should display', () => {
    it('course title', () => {
      const element = fixture.debugElement
        .query(By.css('.course-title h4')).nativeElement;

      expect(element.textContent).toBe(course.title.toUpperCase());
    });

    it('course duration', () => {
      const element = fixture.debugElement
        .query(By.css('.course-duration')).nativeElement;

      expect(element.textContent).toBe(
        CourseDurationPipe.prototype.transform(course.duration));
    });

    it('course create_date', () => {
      const element = fixture.debugElement
        .query(By.css('.course-date')).nativeElement;
      const datePipe = new DatePipe('en');

      expect(element.textContent).toBe(
        datePipe.transform(course.create_date, 'MM.dd.yyyy'));
    });

    it('course description', () => {
      const element = fixture.debugElement
        .query(By.css('.course-description')).nativeElement;

      expect(element.textContent).toBe(course.description);
    });
  });

  it('should edit course when edit-button clicked', () => {
    spyOn(window, 'alert');
    const button = fixture.debugElement
      .query(By.css('.edit-button'));

    button.triggerEventHandler('click', null);

    expect(window.alert).toHaveBeenCalledWith(
      `You are editing course ${course.title}`);
  });

  describe('on delete button click', () => {
    let button: DebugElement;

    beforeEach(() => {
      button = fixture.debugElement.query(By.css('.delete-button'));
      spyOn(coursesService, 'deleteCourse');
    });

    it('should delete course if user confirmed it', () => {
      spyOn(window, 'confirm').and.returnValue(true);

      button.triggerEventHandler('click', null);

      expect(coursesService.deleteCourse).toHaveBeenCalledWith(
        course.id);
    });
  });
});
