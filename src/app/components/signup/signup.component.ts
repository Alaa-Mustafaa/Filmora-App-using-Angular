import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  users:any[]=[];
  request:string="";
  guest_session_id:string=""

  
  constructor(private _AuthService:AuthService , private _Router:Router){
    this.GetAllUsers()

  }

GetAllUsers(){
  if (localStorage.getItem('users') !== null) {
    this.users = JSON.parse(localStorage.getItem('users')!); // Parse the JSON string into an object or array
    console.log(this.users);
  }
}

CreateRequestToken(){
  return this._AuthService.RequestToken().subscribe((res)=>{
   this.request=res.request_token;
   localStorage.setItem('request',this.request)
   console.log(localStorage.getItem('request'))
   window.location.href=`https://www.themoviedb.org/authenticate/${this.request}?redirect_to=https://movie-app-de9z-esy4jtjli-alaa-mostafaas-projects.vercel.app/login`


  })
}

// Sign Up Form

SignUpForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required]),
  session_id:new FormControl(null)
})



   SignUp(form:FormGroup){
  console.log(form.value)
  this.users.push(form.value)
  localStorage.setItem('users',JSON.stringify(this.users))
  this.GetAllUsers()
  this.CreateRequestToken()



}





/* 
       */







}
