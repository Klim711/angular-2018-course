import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingBlockService } from './loading-block.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingBlockService: LoadingBlockService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingBlockService.setIsLoading(true);
    
    return next.handle(request).pipe(
      tap((event): HttpEvent<any> => {
        if (event instanceof HttpResponse) {
          this.loadingBlockService.setIsLoading(false);
        }
        return event;
      })
    );
  }
}
