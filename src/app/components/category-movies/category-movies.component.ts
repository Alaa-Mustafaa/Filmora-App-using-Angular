import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-movies',
  templateUrl: './category-movies.component.html',
  styleUrls: ['./category-movies.component.css']
})
export class CategoryMoviesComponent implements OnInit {
  category:any='';
  movies:any[]=[];
  path:string="https://image.tmdb.org/t/p/original"
  searched:boolean=false
  searchValue:string=''
  movie: any;
constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute,private _Router:Router){


}
ngOnInit(): void {

  // Get the category from URL
  this._ActivatedRoute.paramMap.subscribe(params => {
    this.category = params.get('category');
    if(this.category === 'trending'){
      this.getTrendingMovies()

    }else{
      this.getMovies(this.category)
    }
   

  });

}
// Get all movies ( Depending on the category )
getMovies(category:string){
  return this._DataService.getMovies(category).subscribe((data)=>{
    this.movies=data.results
  })
}

// Trending movies
getTrendingMovies(){
  return this._DataService.getTrendingMovies().subscribe((data)=>{
    this.movies=data.results
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

  // Method to format the string (To remove _ )
  formatString(str: string): string {
    return str.replace(/_/g, ' ');
  }

  
search(x:string){
  return this._DataService.search(x).subscribe((d)=>{
    this.searched=true
    this.movie=d.results[0]
  })
}
}
