import { Author } from 'src/app/course/interfaces/author.interface';

export interface Course {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Author[];
}
