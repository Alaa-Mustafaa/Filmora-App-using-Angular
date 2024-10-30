import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  account_id:any;

  constructor(private _Router:Router){
    this.account_id=localStorage.getItem('account_id')

  }

// Logout

logout(){
  localStorage.removeItem('account_id')
  this._Router.navigate(['/login'])
}
}
