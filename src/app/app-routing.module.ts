import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoryMoviesComponent } from './components/category-movies/category-movies.component';
import { ShowOneMovieComponent } from './components/show-one-movie/show-one-movie.component';
import { LoginComponent } from './components/login/login.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { userGuard } from './guards/user.guard';
import { TVComponent } from './components/tv/tv.component';
import { ShowOneSerieComponent } from './components/show-one-serie/show-one-serie.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccountComponent } from './components/account/account.component';


const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full',title:" Filmora | Home "},
  {path:'categories/:category',component:CategoryMoviesComponent,pathMatch:'full',title:" Filmora | Movies "},
  {path:'oneMovie/:id',component:ShowOneMovieComponent,pathMatch:'full',title:" Filmora | One Movie ",canActivate:[userGuard]},
  {path:'signup',component:SignupComponent,pathMatch:'full',title:" Filmora | Sign Up "},
  {path:'login',component:LoginComponent,pathMatch:'full',title:" Filmora | Login "},
  {path:'favorites',component:FavoriteComponent,pathMatch:'full',title:" Filmora | My Favorite ",canActivate:[userGuard]},
  {path:'watchlist',component:WatchListComponent,pathMatch:'full',title:" Filmora | My WatchList ",canActivate:[userGuard]},
  {path:'TV/:category',component:TVComponent,pathMatch:'full',title:" Filmora | TV Series "},
  {path:'oneSerie/:id',component:ShowOneSerieComponent,pathMatch:'full',title:" Filmora | One Serie",canActivate:[userGuard]},
  {path:'account',component:AccountComponent,pathMatch:'full',title:" Filmora | My Account "},
  {path:'**',component:NotfoundComponent,pathMatch:'full',title:" Filmora | 404 "}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
