import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/course/interfaces/author.interface';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  @Input() public authors: Author[] = [];

  constructor() { }

  ngOnInit() {
  }

}
