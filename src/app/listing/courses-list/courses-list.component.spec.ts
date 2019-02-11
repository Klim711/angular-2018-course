import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import { Course } from '../../shared/interfaces/course.interface';

@Component({
  template: `<app-courses-list [courses]="courses"></app-courses-list>`
})
class TestHostComponent {
  public courses: Course[] = [
    {
      id: 1,
      name: 'A',
      date: new Date('1/1/2011'),
      length: 123,
      description: 'AAA',
      isTopRated: false,
    },
    {
      id: 2,
      name: 'B',
      date: new Date('1/1/2011'),
      length: 123,
      description: 'BBB',
      isTopRated: true,
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
