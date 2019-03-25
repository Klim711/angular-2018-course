import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../interfaces/author.interface';

@Component({
  selector: 'app-course-authors-suggestions',
  templateUrl: './course-authors-suggestions.component.html',
  styleUrls: ['./course-authors-suggestions.component.css']
})
export class CourseAuthorsSuggestionsComponent implements OnInit {
  @Input() public suggestions: Author[] = [];
  @Output() public select: EventEmitter<string> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
