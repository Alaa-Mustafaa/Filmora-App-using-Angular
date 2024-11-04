import { Component ,OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { OneMovie } from 'src/app/interfaces/one-movie';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-one-movie',
  templateUrl: './show-one-movie.component.html',
  styleUrls: ['./show-one-movie.component.css']
})
export class ShowOneMovieComponent implements OnInit{

  movie!: OneMovie;
  path:string='https://image.tmdb.org/t/p/original'
  id!: any;
  Favorites:OneMovie[]=[];
  watchList:OneMovie[]=[];
  user_id:any;

  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
 this.Favorites=JSON.parse(localStorage.getItem('FavoritesFilms')!);
 this.watchList=JSON.parse(localStorage.getItem('watchList')!);
 this.user_id=localStorage.getItem('user_id')

    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.id=params.get('id')
      this.showMovie(this.id)

    })
  }


  showMovie(id:any){
    return this._DataService.GetOneMovie(id).subscribe((data)=>{
      this.movie=data
  
    })
  } 

  
  get(x:any){
    const fullStars = Math.floor(x)
    return Array(fullStars).fill(0)
  }

// Add to Favorite
  addToFavorite(movie:any){
   movie.user_id=this.user_id
   const isExist=this.Favorites.some((moviee)=>moviee.id === movie.id)
   if(isExist){
    Swal.fire({
      title: 'Error',
      text: 'The movie is already in your favorites list. ',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
   }else{
    this.Favorites.push(movie)
    localStorage.setItem('FavoritesFilms',JSON.stringify(this.Favorites))
    Swal.fire({
      title: 'Success',
      text: 'Movie is added successfully to your favorites!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }
  }


  // Add to WatchList
  addToWatchList(movie:any){

     movie.user_id=this.user_id
   const isExist=this.watchList.some((moviee)=>moviee.id === movie.id)
   if(isExist){
    Swal.fire({
      title: 'Error',
      text: 'The movie is already in your WatchList list. ',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
   }else{
    this.watchList.push(movie)
    localStorage.setItem('watchList',JSON.stringify(this.watchList))
    Swal.fire({
      title: 'Success',
      text: 'Movie is added successfully to your WatchList!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }
  }




}
