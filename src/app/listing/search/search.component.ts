import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SetSearchValue } from '../store/listing.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchInput') search: ElementRef;
  public value: string = '';

  constructor(private store: Store<any>) {}

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'input').pipe(
      map(({target}:{target: HTMLInputElement}) => target.value),
      // filter(text => text.length > 2),
      debounceTime(50),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.store.dispatch(new SetSearchValue({value}));
    });
  }
}
