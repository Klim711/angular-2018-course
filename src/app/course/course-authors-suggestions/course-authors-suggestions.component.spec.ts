import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuthorsSuggestionsComponent } from './course-authors-suggestions.component';

describe('CourseAuthorsSuggestionsComponent', () => {
  let component: CourseAuthorsSuggestionsComponent;
  let fixture: ComponentFixture<CourseAuthorsSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAuthorsSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuthorsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
