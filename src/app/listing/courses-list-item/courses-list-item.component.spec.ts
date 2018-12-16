import { CoursesListItem } from './../courses-list-item.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `<app-courses-list-item [courseItem]="course"></app-courses-list-item>`
})
class TestHostComponent {
  public course: CoursesListItem = {
    id: 1,
    title: 'A',
    create_date: '1/1/2011',
    duration: 123,
    description: 'AAA',
  };
}
describe('CoursesListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let course: CoursesListItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
    course = testHost.course;
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  describe('should display', () => {
    it('course title', () => {
      const element = fixture.debugElement
        .query(By.css('.course-title')).nativeElement;

      expect(element.textContent).toBe(course.title);
    });

    it('course duration', () => {
      const element = fixture.debugElement
        .query(By.css('.course-duration')).nativeElement;

      expect(element.textContent).toBe(`${course.duration}min`);
    });

    it('course create_date', () => {
      const element = fixture.debugElement
        .query(By.css('.course-date')).nativeElement;

      expect(element.textContent).toBe(course.create_date);
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

  it('should delete course when delete-button clicked', () => {
    spyOn(window, 'alert');
    const button = fixture.debugElement
      .query(By.css('.delete-button'));

    button.triggerEventHandler('click', null);

    expect(window.alert).toHaveBeenCalledWith(
      `You are going to delete course ${course.title}`);
  });
});
