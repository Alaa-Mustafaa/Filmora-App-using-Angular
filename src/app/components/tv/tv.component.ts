import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit{
  category:any='';
  Tv:any[]=[];
  TVSerie:any;
  searched:boolean=false
  searchValue:string=''
  path:string="https://image.tmdb.org/t/p/original"

  constructor(private _DataService:DataService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    // Get the category from URL
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.getMovies(this.category)
  
    });
  
  }
  // Get all movies ( Depending on the category )
  getMovies(category:string){
    return this._DataService.getTVList(category).subscribe((data)=>{
      this.Tv=data.results
      console.log(this.Tv)
    })
  }
  // Get the stars of the serie
get(x:any){
  const fullStars = Math.floor(x)
  return Array(fullStars).fill(0)
}

// Get the id of the serie to show it

showSerie(x:number){
  this._Router.navigate([`/oneSerie/${x}`])
}

  // Method to format the string (To remove _ )
  formatString(str: string): string {
    return str.replace(/_/g, ' ');
  }

// Search
  search(x:string){
    console.log(x)
    return this._DataService.search(x).subscribe((d)=>{
      this.searched=true
      console.log(d.results[0])
      this.TVSerie=d.results[0]
    })
  }
}
