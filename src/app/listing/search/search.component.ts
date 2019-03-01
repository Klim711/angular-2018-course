import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public value: string = '';

  constructor(private coursesService:CoursesService) {}

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    const searchValue = (<HTMLInputElement>event.target).value;
    this.value = searchValue;
  }

  search() {
    this.coursesService.setSearchValue(this.value);
  }
}
