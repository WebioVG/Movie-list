import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: Object[] = []

    constructor(
        private http: HttpClient,
        private storage: Storage
    ) {}

    ionViewWillEnter() {

        // Empty the storage
        this.storage.create()
        this.storage.clear()
        
        // This API comes from www.themoviedb.org/
        this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=fc7b957c462178c939f7cdf82141cd58')
            .subscribe(data => {
                
                this.movies = data['results']
                // console.log(this.movies[0]);
            }
        )
    }

    selectMovie = (movie) => {

        this.storage.set('selectedMovie', JSON.stringify(movie))
    }

}
