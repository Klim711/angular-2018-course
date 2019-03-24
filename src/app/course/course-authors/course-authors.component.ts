import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../interfaces/author.interface';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseAuthorsComponent),
    multi: true,
  }],
})
export class CourseAuthorsComponent implements ControlValueAccessor {
  public authors: Author[] = [];
  public searchValue: string = '';
  public authorsSuggestions: Author[] = [];

  constructor(private authorsService: AuthorsService) {}

  writeValue(value: any) {
    if (value !== undefined) {
      this.authors = value;
      this.propagateChange(this.authors);
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  onChange() {
    this.authorsService.getAuthors(this.searchValue)
      .subscribe((authors: Author[]) => {
        this.authorsSuggestions = authors;
      });
    // this.propagateChange(this.authors);
  }

  registerOnTouched() {}
}
