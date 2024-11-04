import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from './../../interfaces/users';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  users:Users[]=[];
  SignUpError:boolean=false;

  
  constructor(private _Router:Router){

  }
  
  ngOnInit():void{
    if (localStorage.getItem('users') !== null) {
      this.users = JSON.parse(localStorage.getItem('users')!); 
      console.log(this.users);
    }

  }





// Sign Up Form and its validations

SignUpForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(4)]),
})


// Sign Up function

SignUp(form:FormGroup){
  let isExist;

  for(let user of this.users){
    if( user.email === form.value.email){
      isExist=true;
    }else{
      isExist=false
    }
  }

if(isExist){
  this.SignUpError=true

}else{
  this.SignUpError=false
  this.users.push(form.value)
  localStorage.setItem('users',JSON.stringify(this.users))
  this._Router.navigate(['/login'])
}


}




}
