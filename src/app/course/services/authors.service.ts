import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../interfaces/author.interface';
import { Observable } from 'rxjs';

const AUTHORS_SOURCE = 'http://localhost:3004/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {}

  public getAuthors(searchValue: string = ''):Observable<Author[]> {
    return this.http.get<Author[]>(`${AUTHORS_SOURCE}`);
  }
}
