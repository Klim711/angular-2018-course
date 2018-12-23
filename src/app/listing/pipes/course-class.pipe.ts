import { Pipe, PipeTransform } from '@angular/core';

const TWO_WEEKS = Number('1.2096e+9');

@Pipe({
  name: 'courseClass'
})
export class CourseClassPipe implements PipeTransform {

  transform(createDate: string): string {
    const courseDate: Date = new Date(createDate);
    const currentDate: Date = new Date();
    const oldnessLimit: Date = new Date(Number(currentDate) - TWO_WEEKS);

    if (courseDate < currentDate && courseDate >= oldnessLimit)  {
      return 'alert-success';
    } else if (courseDate > currentDate) {
      return 'alert-primary';
    }
    return '';
  }

}
