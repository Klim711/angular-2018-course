import { Course } from './course.interface';

export class CourseModel implements Course {
  public id: number;
  public title: string = 'title';
  public create_date: Date = new Date();
  public duration: number = 0;
  public description: string = 'description';
  public rating: number | null = null;

  constructor(content: {
    id: number,
    title?: string,
    create_date?: Date,
    duration?: number,
    description?: string,
    rating?: number,
  }) {
    Object.assign(this, content);
  }
}
