import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchInput') search: ElementRef;
  public value: string = '';

  constructor(private coursesService:CoursesService) {}

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'input').pipe(
      map(({target}:{target: HTMLInputElement}) => target.value),
      // filter(text => text.length > 2),
      debounceTime(50),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.coursesService.setSearchValue(value);
    });
  }
}
