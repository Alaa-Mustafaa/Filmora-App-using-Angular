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
  account_id! :any;

  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){

  

  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.id=params.get('id')
      this.showMovie(this.id)
      this.account_id=localStorage.getItem('account_id')

    })
    
 
  }


  showMovie(id:any){
    return this._DataService.GetOneMovie(id).subscribe((data)=>{
      console.log(data)
      this.movie=data
  
    })
  } 

  
  get(x:any){
    const fullStars = Math.floor(x)
    return Array(fullStars).fill(0)
  }

// Add to Favorite
  addToFavorite(movieId:number){
    return this._DataService.AddFavorite(this.account_id,movieId).subscribe((res)=>{
      console.log(res)
      if(res.success){
        Swal.fire({
          title: 'Success',
          text: 'Movie is added successfully to your favotites ',
          icon: 'success',
          confirmButtonText: 'OK'
        })
    }

    })
  }


  // Add to WatchList

  addToWatchList(movieId:number){
    return this._DataService.AddWatchList(this.account_id,movieId).subscribe((res)=>{
      console.log(res)
      if(res.success){
        Swal.fire({
          title: 'Success',
          text: 'Movie is added successfully to your WatchList ',
          icon: 'success',
          confirmButtonText: 'OK'
        })
    }

    })
  }
}
