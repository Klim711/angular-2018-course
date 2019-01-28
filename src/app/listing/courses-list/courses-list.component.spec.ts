import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create <app-courses-list-item> for each item in courses', () => {
    const courses = [
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
      },
    ];
    component.courses = courses;

    fixture.detectChanges();

    const courseItems = fixture.debugElement
      .queryAll(By.css('app-courses-list-item'));

    expect(courseItems.length).toBe(courses.length);
  });
});
