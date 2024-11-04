import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  users:Users[]=[];
passwordError:boolean=false
EmailError:boolean=false


  
  constructor( private _Router:Router) {}

  ngOnInit():void{
    if (localStorage.getItem('users') !== null) {
      this.users = JSON.parse(localStorage.getItem('users')!); 
      console.log(this.users);
    }

  }
 
 
  LoginForm: FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(4)]),
  });

  login(form: FormGroup) {

    let isExist = this.users.findIndex(user => user.email === form.value.email);
 
    if(isExist > 0){ // Email exists
      this.EmailError=false

      // Check for the password , if the password is correct then , user navigates to home page
      if(this.users[isExist].password === form.value.password){
        this.passwordError=false
        localStorage.setItem('user_id' , isExist.toString())
        this._Router.navigate(['/home'])
      }
      else{
      // if the password is not correct 
        this.passwordError=true
      }

    }else{ // > 0 this means email is not found , then user has to sign up first 
      this.EmailError=true
    }
  }
}
