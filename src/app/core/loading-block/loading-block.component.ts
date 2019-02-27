import { Component, OnInit } from '@angular/core';
import { LoadingBlockService } from '../services/loading-block/loading-block.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit {
  public isLoading: boolean = false;
  constructor(private loadingBlockService: LoadingBlockService) { }

  ngOnInit() {
    this.loadingBlockService.isLoadingUpdated.subscribe((value) => {
      if (value) {
        this.preventKeyboardEvents();
      } else {
        this.allowKeyboardsEvents();
      }
      this.isLoading = value;
    });
  }

  keyDownHandler(event) {
    event.preventDefault();
  }

  preventKeyboardEvents() {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  allowKeyboardsEvents() {
    window.removeEventListener('keydown', this.keyDownHandler);
  }
}
