import { Course } from '../../shared/interfaces/course.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(courses: Course[]): Course[] {
    return Array.from(courses).sort((course1, course2) => {
      const date1 = course1.date;
      const date2 = course2.date;

      if (date1 > date2) {
        return 1;
      } else if (date1 < date2) {
        return -1;
      }
      return 0;
    });
  }

}
