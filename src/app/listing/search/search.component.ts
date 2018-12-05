import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public value: string;

  constructor() {
    this.value = '';
  }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    this.value = (<HTMLInputElement>event.target).value;
  }

  search() {
    alert(`You kind of searched courses by value: ${this.value}`);
  }
}
