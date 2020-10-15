import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviereviewService } from '../moviereview.service';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {

  movieList: Movie[];

  constructor(private service: MoviereviewService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.movieList = data);
  }

}
