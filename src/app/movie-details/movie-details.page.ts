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

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this.storage.get('selectedMovie')
      .then(id => {

        this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fc7b957c462178c939f7cdf82141cd58&append_to_response=credits`)
          .subscribe((movie: any) => {

            this.movie = movie
            // console.log(this.movie);
          })
      })
  }

  selectActor = (id) => {
    this.storage.set('selectedActor', JSON.stringify(id))    
  }

}
