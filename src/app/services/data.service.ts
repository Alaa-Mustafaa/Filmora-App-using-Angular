import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzNiMGZkNTExZmZiMGUxMWY4ZGJkNWM1YmNiNzg2NyIsIm5iZiI6MTcyNzM2OTU2My41NTAxNDMsInN1YiI6IjY1MDA4NjZlZmZjOWRlMGVlMTc2ZjYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.voRsHEjEoXA502xO6lZSn0yCSiLULFpHVPpwp77SWmQ',
    },
  };

  constructor(private _HttpClient: HttpClient) {}

  // Types of movies (comedy - romantic)
  getTypesOfMovies(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      this.options
    );
  }

  // Get All Movies ( Now Playing or Popular or Top Rated or Upcoming)

  getMovies(type: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
      this.options
    );
  }

  // Get All Movies ( Trending )
  getTrendingMovies(): Observable<any> {
    return this._HttpClient.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      this.options
    );
  }

    // Get All Tv List ( Airing Today - On The Air - Popular - Top Rated )
    getTVList(type:string): Observable<any> {
      return this._HttpClient.get(
        `https://api.themoviedb.org/3/tv/${type}`,
        this.options
      );
    }

   

  // Get one movie
  GetOneMovie(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      this.options
    );
  }
 // Get one serie
  GetOneSerie(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${id}`,
      this.options
    );
  }




    search(movieName:string): Observable<any>{
      return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}`,this.options)


    }

}
