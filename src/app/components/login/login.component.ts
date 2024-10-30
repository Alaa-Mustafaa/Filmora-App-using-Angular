import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: any;
  guest_session_id: any;
  request:any;
  position:any;

  
  constructor(private _AuthService: AuthService , private _Router:Router, private _ActivatedRoute:ActivatedRoute) {
    this.users = JSON.parse(localStorage.getItem('users')!);
    this.request=localStorage.getItem('request')

    console.log(localStorage.getItem('request'))

    console.log(this.users)



  }

    // Request token for new users



  // Create Session
  CreateSession(position:number) {

  return this._AuthService.CreateSession().subscribe({
      next:(response)=>{
        console.log(response);
        this.guest_session_id = response.session_id;
        localStorage.setItem('session_id', this.guest_session_id);
        this.crete(position)

      

      },
      error:(err)=>{console.log(err)}
    }); 
  }

 
  crete(position:number) {
    return this._AuthService.CreateLogin().subscribe({
      next: (response) => {
        console.log(response.id);
        localStorage.setItem('account_id',response.id)
        this.users[position].session_id=response.id;
        localStorage.setItem('users',JSON.stringify(this.users)) 
        this._Router.navigate(['/home'])

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  login(form: FormGroup) {

    let isExist ;
    console.log(form.value.email);

    for (let ele of this.users) {
      if (ele.email === form.value.email) {
        this.position =this.users.indexOf(ele)
        console.log(this.users[this.position])
        isExist = true;
      } else {
        isExist = false;
      }
    }

    if(isExist){
      console.log('Truee')
      if(this.users[this.position].session_id !== null){
        this.crete(this.position)
      }else{
        this.CreateSession(this.position)

      }

    }else{
      console.log('false')
    }
    console.log(this.users);
  }
}
