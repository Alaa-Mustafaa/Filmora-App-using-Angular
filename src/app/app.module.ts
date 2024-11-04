import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryMoviesComponent } from './components/category-movies/category-movies.component';
import { RouterModule } from '@angular/router';
import { ShowOneMovieComponent } from './components/show-one-movie/show-one-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { TVComponent } from './components/tv/tv.component';
import { ShowOneSerieComponent } from './components/show-one-serie/show-one-serie.component';
import { SearchComponent } from './components/search/search.component';
import { AccountComponent } from './components/account/account.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    CategoryMoviesComponent,
    ShowOneMovieComponent,
    LoginComponent,
    FavoriteComponent,
    WatchListComponent,
    TVComponent,
    ShowOneSerieComponent,
    SearchComponent,
    AccountComponent,
    NotfoundComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
