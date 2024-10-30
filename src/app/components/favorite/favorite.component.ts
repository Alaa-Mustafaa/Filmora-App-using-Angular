import { Component , OnInit} from '@angular/core';
import { OneMovie } from 'src/app/interfaces/one-movie';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{

  account_id! :any;
  movies:OneMovie[]=[];
  path:string="https://image.tmdb.org/t/p/original"
  constructor(private _DataService:DataService , private _Router:Router){

  }

  ngOnInit(): void {
    this.account_id=localStorage.getItem('account_id')
    console.log(this.account_id)
    this.GetAllFavoriteMovies()

  }

  GetAllFavoriteMovies(){
    return this._DataService.GetAllFavoriteMovies(this.account_id).subscribe({
      next:(res)=>{
        this.movies=res.results
        console.log(this.movies)
      },
      error:(err)=>{console.log(err)}
    })
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
}
