import { CoursesListItem } from './../courses-list-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public courses: CoursesListItem[] = [
    {
      id: 1,
      title: 'A',
      create_date: '1/1/2011',
      duration: 123,
      description: 'AAA',
    },
    {
      id: 2,
      title: 'B',
      create_date: '1/1/2011',
      duration: 123,
      description: 'BBB',
    },
    {
      id: 3,
      title: 'C',
      create_date: '1/1/2011',
      duration: 123,
      description: 'CCC',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
