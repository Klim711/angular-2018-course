import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import { Course } from '../course.interface';

@Component({
  template: `<app-courses-list [courses]="courses"></app-courses-list>`
})
class TestHostComponent {
  public courses: Course[] = [
    {
      id: 1,
      title: 'A',
      create_date: new Date('1/1/2011'),
      duration: 123,
      description: 'AAA',
      rating: 321,
    },
    {
      id: 2,
      title: 'B',
      create_date: new Date('1/1/2011'),
      duration: 123,
      description: 'BBB',
      rating: 321,
    }
  ];
}
describe('CoursesListComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        TestHostComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should create <app-courses-list-item> for each item in courses', () => {
    fixture.detectChanges();

    const courseItems = fixture.debugElement
      .queryAll(By.css('app-courses-list-item'));

    expect(courseItems.length).toBe(testHost.courses.length);
  });
});
