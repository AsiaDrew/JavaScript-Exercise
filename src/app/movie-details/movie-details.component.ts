import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  DisplayMovie:Movie = {} as Movie;

  constructor(private route:ActivatedRoute, private movieServie:MovieService) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;

    let id: number = Number(routeParams.get("id"));
    this.DisplayMovie = this.movieServie.getMovieById(id);

  }

}
