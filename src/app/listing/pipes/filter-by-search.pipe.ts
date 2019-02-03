import { Course } from '../../shared/interfaces/course.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(courses: Course[], searchValue: string): Course[] {
    if (!searchValue) {
      return Array.from(courses);
    }
    return courses.filter((course) => course.title.includes(searchValue));
  }

}
