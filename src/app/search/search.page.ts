import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  search: string = ''
  results: object[] = []

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }

  ionViewWillEnter() {

  }

  searchFor = () => {
    setTimeout(() => {      
      this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=fc7b957c462178c939f7cdf82141cd58&query=${this.search}`)
        .subscribe(data => {
          this.results = data['results']
          console.log(this.results);
        })
    }, 100);
  }

  selectMovie = (id) => {
    this.storage.set('selectedMovie', JSON.stringify(id))
}
}
