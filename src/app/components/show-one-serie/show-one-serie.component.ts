import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-one-serie',
  templateUrl: './show-one-serie.component.html',
  styleUrls: ['./show-one-serie.component.css']
})
export class ShowOneSerieComponent {

  TV!: any;
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
    return this._DataService.GetOneSerie(id).subscribe((data)=>{
      console.log(data)
      this.TV=data
  
    })
  } 

  
  get(x:any){
    const fullStars = Math.floor(x)
    return Array(fullStars).fill(0)
  }


}
