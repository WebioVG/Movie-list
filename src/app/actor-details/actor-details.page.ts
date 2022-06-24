import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.page.html',
  styleUrls: ['./actor-details.page.scss'],
})
export class ActorDetailsPage {

  actor: any = {}

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this.storage.get('selectedActor').then(selectedActorID => {
      // this.actor = JSON.parse(selectedActorID) 
      // console.log(typeof selectedActorID);
      
      this.http.get(`https://api.themoviedb.org/3/person/${selectedActorID}?api_key=fc7b957c462178c939f7cdf82141cd58&append_to_response=movie_credits`)
        .subscribe((actor: any) => {
          this.actor = actor
          // console.log(this.actor);
          console.log(this.actor.movie_credits.cast[0]);
          
        })
      
    })
  }

}
