import { CoursesListItem } from './../courses-list-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  public courses: CoursesListItem[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'A',
        create_date: '12/20/2018',
        duration: 123,
        description: 'AAA',
      },
      {
        id: 2,
        title: 'B',
        create_date: '1/1/2019',
        duration: 123,
        description: 'BBB',
      },
      {
        id: 3,
        title: 'C',
        create_date: '1/1/2020',
        duration: 123,
        description: 'CCC',
      },
      {
        id: 4,
        title: 'D',
        create_date: '1/1/2011',
        duration: 123,
        description: 'DDD',
      },
      {
        id: 5,
        title: 'E',
        create_date: '1/1/2011',
        duration: 123,
        description: 'EEE',
      },
      {
        id: 6,
        title: 'F',
        create_date: '1/1/2011',
        duration: 123,
        description: 'FFF',
      },
    ];
  }

}
