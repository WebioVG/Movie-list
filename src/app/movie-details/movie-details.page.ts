import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage {

  movie: object = {}

  constructor(
    private storage: Storage
  ) { }

  ionViewWillEnter() {
    this.storage.get('selectedMovie').then(movie => {
      this.movie = JSON.parse(movie)
      console.log(this.movie);
      
    })
    
  }



}
