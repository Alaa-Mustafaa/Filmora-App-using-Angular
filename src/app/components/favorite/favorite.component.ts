import { Component , OnInit} from '@angular/core';
import { OneMovie } from 'src/app/interfaces/one-movie';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{

  Favorites:OneMovie[]=[];
  myFavorites:OneMovie[]=[];
  userId:any;

  
  path:string="https://image.tmdb.org/t/p/original"
  constructor(private _Router:Router){

  }

  ngOnInit(): void {
    this.userId=localStorage.getItem('user_id');

    this.Favorites=JSON.parse(localStorage.getItem('FavoritesFilms')!);
    console.log(this.Favorites)
    this.getMyFavoriteMovies()
    this.myFavorites=JSON.parse(localStorage.getItem('myFav')!);
    console.log(this.myFavorites)


  }

  getMyFavoriteMovies(){
    for(let movie of this.Favorites){
      if(movie.user_id === this.userId){
        this.myFavorites.push(movie)
      }
    }

    localStorage.setItem('myFav',JSON.stringify(this.myFavorites))

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

DeleteFromFavorite(id:number){
  let movieId=this.myFavorites.findIndex((movie)=> movie.id === id);
  let movieId2=this.Favorites.findIndex((movie)=> movie.id === id);

  this.myFavorites.splice(movieId,1)
  this.Favorites.splice(movieId2,1)

  localStorage.setItem('myFav',JSON.stringify(this.myFavorites))
  localStorage.setItem('FavoritesFilms',JSON.stringify(this.Favorites))

  Swal.fire({
    title: 'Success',
    text: 'Movie is deleted successfully from your favorites!',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}
}
