import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SetSearchValue } from '../store/listing.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search: FormControl;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.search = new FormControl();
    this.search.valueChanges.pipe(
      debounceTime(50),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.store.dispatch(new SetSearchValue({value}));
    });
  }
}
