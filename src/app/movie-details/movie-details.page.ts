import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage {

  movie: any = {}
  actors: any = []

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this.storage.get('selectedMovie')
      .then(movie => {
        this.movie = JSON.parse(movie)
        // console.log(this.movie);

        let movieID = this.movie.id
        // console.log(movieID);

        this.http.get(`https://api.themoviedb.org/3/movie/${this.movie.id}/credits?api_key=fc7b957c462178c939f7cdf82141cd58`)
          .subscribe((actors: any) => {
            this.actors = actors.cast
            // console.log(this.actors);
          })
      })
  }

  selectActor = (id) => {
    this.storage.set('selectedActor', JSON.stringify(id))    
  }

}
