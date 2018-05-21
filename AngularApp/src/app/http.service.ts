import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getMovies(){
    console.log("in service getMovies");
    return this._http.get('/allmovies');
  }

  deleteMovie(id){
    return this._http.delete('/movie/'+id);
  }

  addMovie(movie){
    console.log("in service, movie: ", movie);
    return this._http.post('/movie/',movie);
  }

  getMovieById(id){
    console.log("in service getMovieById, id: ", id);
    return this._http.get('/movie/'+id);
  }

  updateMovieById(movie){
    console.log("in update Movie: ", movie);
    var url_string = '/movie/' + movie._id;
    console.log("url_string: ", url_string);
    return this._http.put(url_string, movie)
  }

  findMovieByName(movie){
    console.log("in findMovieByName: movie: ", movie)
    var url_string = '/movieName/' + movie['title'];
    return this._http.get(url_string);
  }

  addMovieAndReview(movie,review){
    var reviewAndMovie = {
      review: review,
      movie: movie
    }
    console.log("service: 555: review: ", review, " movie: ", movie);
    return this._http.post('/addmoviereview',reviewAndMovie);
  }

  addReview(review, movieId){
    var reviewMovieId = {
      review: review,
      movieId : movieId
    }
    return this._http.post('/createreview/',reviewMovieId);

  }
}


