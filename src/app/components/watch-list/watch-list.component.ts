import { Component , OnInit} from '@angular/core';
import { OneMovie } from 'src/app/interfaces/one-movie';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit{

  watchlist:OneMovie[]=[];
  mywatchlist:OneMovie[]=[];
  userId:any;

  path:string="https://image.tmdb.org/t/p/original"
  constructor( private _Router:Router){

  }

  ngOnInit(): void {
    this.userId=localStorage.getItem('user_id');

    this.watchlist=JSON.parse(localStorage.getItem('watchList')!);
    console.log(this.watchlist)
    this.getMyWatchlistMovies()
    this.mywatchlist=JSON.parse(localStorage.getItem('mywatchlist')!);
    console.log(this.mywatchlist)


  }
  getMyWatchlistMovies(){
    for(let movie of this.watchlist){
      if(movie.user_id === this.userId){
        this.mywatchlist.push(movie)
      }
    }

    localStorage.setItem('mywatchlist',JSON.stringify(this.mywatchlist))

  }

  // Get the stars of the film
get(x:any){
  const fullStars = Math.floor(x)
  return Array(fullStars).fill(0)
}

// Get the id of the movie to show it

showMovie(x:number){
  this._Router.navigate([`/oneMovie/${x}`])
}

DeleteFromWatchList(id:number){
  let movieId=this.mywatchlist.findIndex((movie)=> movie.id === id);
  let movieId2=this.watchlist.findIndex((movie)=> movie.id === id);

  this.mywatchlist.splice(movieId,1)
  this.watchlist.splice(movieId2,1)

  localStorage.setItem('mywatchlist',JSON.stringify(this.mywatchlist))
  localStorage.setItem('watchList',JSON.stringify(this.watchlist))

  Swal.fire({
    title: 'Success',
    text: 'Movie is deleted successfully from your Watchlist!',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}
}
