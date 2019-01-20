import { CoursesListItem } from './../courses-list-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(courses: CoursesListItem[], searchValue: string): CoursesListItem[] {
    if (!searchValue) {
      return Array.from(courses);
    }
    return courses.filter((course) => course.title.includes(searchValue));
  }

}
