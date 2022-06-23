import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: Object[] = []

  constructor(
    private http: HttpClient
  ) {}

  // This API comes from www.themoviedb.org/

    ionViewWillEnter() {
        this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=fc7b957c462178c939f7cdf82141cd58')
        .subscribe(data => {
            
            this.movies = data['results']
            console.log(this.movies[0]);
        })
    }

}
