import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviereviewService {

  constructor(private client: HttpClient) { }

  url = 'http://localhost:3000/movies';

  findAll(): Observable<Movie[]> {

    return this.client.get<Movie[]>(this.url);
  }
}
