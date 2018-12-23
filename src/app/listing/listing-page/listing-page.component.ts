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
        title: 'a',
        create_date: '12/20/2018',
        duration: 123,
        description: 'AAA',
        rating: 9,
      },
      {
        id: 2,
        title: 'b',
        create_date: '1/1/2019',
        duration: 123,
        description: 'BBB',
        rating: 7,
      },
      {
        id: 3,
        title: 'c',
        create_date: '1/1/2020',
        duration: 123,
        description: 'CCC',
        rating: 4,
      },
      {
        id: 4,
        title: 'D',
        create_date: '1/1/2011',
        duration: 123,
        description: 'DDD',
        rating: null,
      },
      {
        id: 5,
        title: 'E',
        create_date: '1/1/2011',
        duration: 123,
        description: 'EEE',
        rating: 10,
      },
      {
        id: 6,
        title: 'F',
        create_date: '1/1/2011',
        duration: 123,
        description: 'FFF',
        rating: 6,
      },
    ];
  }

}
