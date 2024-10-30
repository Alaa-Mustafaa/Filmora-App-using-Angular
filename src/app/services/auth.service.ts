import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzNiMGZkNTExZmZiMGUxMWY4ZGJkNWM1YmNiNzg2NyIsIm5iZiI6MTcyNzM2OTU2My41NTAxNDMsInN1YiI6IjY1MDA4NjZlZmZjOWRlMGVlMTc2ZjYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.voRsHEjEoXA502xO6lZSn0yCSiLULFpHVPpwp77SWmQ'
    }
  };

  
  body={
    request_token:localStorage.getItem('request')

  }
  constructor(private _HttpClient:HttpClient) { }

  // Request token for new users

  RequestToken():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/authentication/token/new',this.options)
  }

  // 

  CreateSession():Observable<any>{
    return this._HttpClient.post('https://api.themoviedb.org/3/authentication/session/new',this.body,this.options)
  }
  

  CreateLogin():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/account',this.options)
  }
}
