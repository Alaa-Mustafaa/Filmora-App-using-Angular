import { Router } from '@angular/router';
import { Component ,OnInit} from '@angular/core';
import {  OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/interfaces/movie';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user_id:any;

  trending:Movie[]=[]
 
// Variables to include data from service
  movieCategories: { [key: string]: Movie[] } = {
    popular: [],
    top_rated: [],
    now_playing: [],
    upcoming:[]
  };

  TVSreiesCategories: { [key: string]: Movie[] } = {
    popular: [],
    top_rated: [],
    airing_today: [],
    on_the_air:[]
  };

  p:string="https://www.youtube.com/embed/"

  s:string='https://image.tmdb.org/t/p/original'
  
  constructor(private _DataService:DataService , private _Router:Router){}

  ngOnInit(): void {
    this.user_id=localStorage.getItem('user_id')
    console.log(localStorage.getItem('user_id'))
    // Movies
    this.getMovies('popular')
    this.getMovies('upcoming')
    this.getMovies('top_rated')
    this.getMovies('now_playing')
    this.getTrendingMovies()
    // End of Movies

    // TV series
    this.getTVSeries('popular')
    this.getTVSeries('top_rated')
   
    // End of TV series
  }

   // Movies
  getMovies(category: string) {
    return this._DataService.getMovies(category).subscribe((data) => {
      this.movieCategories[category] = data.results;
    });
  }

  
// Trending movies
getTrendingMovies(){
  return this._DataService.getTrendingMovies().subscribe((data)=>{
    this.trending=data.results
  })
}
// End of Movies

showMovie(x:number){
  this._Router.navigate([`/oneMovie/${x}`])
}
// Get the id of the serie to show it

showSerie(x:number){
  this._Router.navigate([`/oneSerie/${x}`])
}

getTVSeries(category: string) {
  return this._DataService.getTVList(category).subscribe((data) => {
    this.TVSreiesCategories[category] = data.results;
  });
}



// Logout

logout(){
  localStorage.removeItem('user_id')
  this._Router.navigate(['/login'])
}

// Owl carousel 
  customOptions: OwlOptions = {
    loop: true,
    margin:15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }


}
