import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {
  public isLoadingUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.isLoadingUpdated.emit(false);
  }

  public setIsLoading(value) {
    this.isLoadingUpdated.emit(value);
  }
}
