import { Course } from '../../../shared/interfaces/course.interface';

export class CourseModel implements Course {
  public id: number;
  public name: string = 'title';
  public date: Date = new Date();
  public length: number = 0;
  public description: string = 'description';
  public isTopRated: boolean = false;

  constructor(content: {
    id: number,
    name?: string,
    date?: Date,
    length?: number,
    description?: string,
    isTopRated?: boolean,
  }) {
    Object.assign(this, content);
  }
}
