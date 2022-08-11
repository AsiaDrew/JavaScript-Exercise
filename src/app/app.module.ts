import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
 {path: 'MovieList', component: MovieListComponent},
  {path: 'MovieDetails/:id', component: MovieDetailsComponent},
  //default page
  {path: '', redirectTo:'/MovieList', pathMatch:'full'},
  //if page not found
  {path: '**', component: PageNotFoundComponent}
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
