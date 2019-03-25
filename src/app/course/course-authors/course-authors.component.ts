import { Component, forwardRef, HostListener, ElementRef } from '@angular/core';
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
  public authorsSuggestions: Author[] = [];

  constructor(
    private authorsService: AuthorsService,
    private eRef: ElementRef
  ) {}

  writeValue(value: any) {
    if (value !== undefined) {
      this.updateAuthors(value);
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  onFocus() {
    this.authorsService.getAuthors()
      .subscribe((authors: Author[]) => {
        this.authorsSuggestions = authors;
      });
  }

  updateAuthors(newAuthors: Author[]) {
    this.authors = newAuthors;
    this.propagateChange(this.authors);
  }

  onSelect(authorId: string) {
    const selectedAuthor = this.authorsSuggestions
      .find((author) => author.id === authorId);

    this.updateAuthors([
      ...this.authors,
      selectedAuthor,
    ]);

    this.authorsSuggestions = [];
  }

  @HostListener('document:click', ['$event'])
  clickout (event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.authorsSuggestions = [];
    }
  }

  registerOnTouched() {}
}
