import { Component , OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { OneMovie } from 'src/app/interfaces/one-movie';
import { Router } from '@angular/router';



@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit{
  account_id! :any;
  movies:OneMovie[]=[];
  path:string="https://image.tmdb.org/t/p/original"
  constructor(private _DataService:DataService , private _Router:Router){

  }

  ngOnInit(): void {
    this.account_id=localStorage.getItem('account_id')
    console.log(this.account_id)
    this.GetAllWatchListMovies()

  }

  GetAllWatchListMovies(){
    return this._DataService.GetAllWatchListMovies(this.account_id).subscribe({
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
