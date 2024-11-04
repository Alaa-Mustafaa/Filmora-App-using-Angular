import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  user_id:any;

  constructor(private _Router:Router){}

  ngOnInit():void{
    this.user_id=localStorage.getItem('user_id')
    console.log(this.user_id)
  }

// Logout

logout(){
  localStorage.removeItem('user_id')
  this._Router.navigate(['/login'])
}
}
